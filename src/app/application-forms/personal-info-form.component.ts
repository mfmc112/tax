import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NInputComponent } from '../common/n-components/';
import { MaskUtils } from './utils/masks-utils';
import { DatePickerUtils } from './utils/date-picker-utils';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { ZipCodeUtils } from './utils/zip-code-utils';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Application, Client, Phone, PersonalInformation, BasicInformation, MailingAddress } from '../common';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'personal-info-form',
  templateUrl: './templates/personal-info-form.component.html'
})
export class PersonalInfoFormComponent implements OnInit, OnDestroy {
  maskUtils: MaskUtils = new MaskUtils();
  datePickerUtils: DatePickerUtils = new DatePickerUtils();
  zipCodeUtils: ZipCodeUtils;

  phoneMask: Array<string | RegExp> = this.maskUtils.MASKS.PHONE;
  ssnMask: Array<string | RegExp> = this.maskUtils.MASKS.SSN;
  dateMask: Array<string | RegExp> = this.maskUtils.MASKS.DATE;
  initialMask: Array<string | RegExp> = this.maskUtils.MASKS.INITIAL;
  zipMask:  Array<string | RegExp> = this.maskUtils.MASKS.ZIP;
  stateMask:  Array<string | RegExp> = this.maskUtils.MASKS.STATE;
  suffixMask: Array<string | RegExp> = this.maskUtils.MASKS.NAME_SUFFIX;
  taxForm: FormGroup;
  taxPayerGroup: FormGroup;
  payerPhoneGroup: FormGroup;
  spouseGroup: FormGroup;
  spousePhoneGroup: FormGroup;
  mailingAddressGroup: FormGroup;
  client: Client;
  application: Application;
  pi: PersonalInformation;
  myDatePickerOptions: IMyDpOptions = this.datePickerUtils.myDatePickerOptions;
  defaultMonth: IMyDefaultMonth = this.datePickerUtils.defaultMonth;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private zipCodeApiService: ZipCodeApiService,
    private currentApplicationService: CurrentApplicationService
  ){
    this.zipCodeUtils = new ZipCodeUtils(zipCodeApiService);
    this.toastr.setRootViewContainerRef(vcr);

    this.application = this.currentApplicationService.getApplication();
    this.pi = this.currentApplicationService.getPersonalInformation();
    this.payerPhoneGroup = this.createPhoneGroup(this.pi.taxPayer);
    this.spousePhoneGroup = this.createPhoneGroup(this.pi.spouse);
    this.taxPayerGroup = this.createBasicInfoTaxPayerGroup(this.pi.taxPayer, this.payerPhoneGroup);
    this.spouseGroup = this.createBasicInfoSpouseGroup(this.pi.spouse, this.spousePhoneGroup);
    this.mailingAddressGroup = this.createMailingAddressGroup(this.pi);

    this.taxForm = formBuilder.group({
      'taxPayer': this.taxPayerGroup,
      'spouse': this.spouseGroup,
      'mailingAddress': this.mailingAddressGroup,
      'dependents': [this.pi.dependents, Validators.required]
    });
  }

  ngOnInit(): void {
    this.datePickerUtils.setDateFromField(
      this.taxForm.get('taxPayer').get('dateOfBirth'),
      this.taxForm.get('taxPayer').get('age'),
      this.calculateAge
    );
    this.datePickerUtils.setDateFromField(
      this.taxForm.get('spouse').get('dateOfBirth'),
      this.taxForm.get('spouse').get('age'),
      this.calculateAge
    );
    this.enableType('taxPayer');
    this.enableType('spouse');
  }

  ngOnDestroy() : void {
    // save input data
    this.submitForm('');
  }

  enableType(owner: any): void {
    if (this.taxForm.get(owner).get('phone').get('other').value && this.taxForm.get(owner).get('phone').get('other').value != "") {
      this.taxForm.get(owner).get('phone').get('type').enable();
    } else {
      this.taxForm.get(owner).get('phone').get('type').reset();
      this.taxForm.get(owner).get('phone').get('type').disable();
    }
    this.taxForm.markAsDirty();
  }

  createBasicInfoTaxPayerGroup(basic: BasicInformation, phoneGroup: FormGroup): FormGroup {
    if (!basic.ssn) basic.ssn = this.application.client.ssn;
    return new FormGroup({
      'firstName': new FormControl(basic.firstName, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
      'initial': new FormControl(basic.initial, Validators.compose([Validators.maxLength(1), Validators.pattern(validationRules.STRING)])),
      'lastName': new FormControl(basic.lastName, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
      'suffix': new FormControl(basic.suffix),
      'ssn': new FormControl({value: basic.ssn, disabled: true }, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])),
      'dateOfBirth': new FormControl(basic.dateOfBirth, Validators.required),
      'age': new FormControl({value: '0', disabled: true }),
      'occupation': new FormControl(basic.occupation),
      'phone': phoneGroup
    });
  }

  createBasicInfoSpouseGroup(basic: BasicInformation, phoneGroup: FormGroup): FormGroup {
    return new FormGroup({
      'firstName': new FormControl(basic.firstName, Validators.compose([Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
      'initial': new FormControl(basic.initial, Validators.compose([Validators.maxLength(1), Validators.pattern(validationRules.STRING)])),
      'lastName': new FormControl(basic.lastName, Validators.compose([Validators.maxLength(45), Validators.pattern(validationRules.STRING)])),
      'suffix': new FormControl(basic.suffix),
      'ssn': new FormControl({value: basic.ssn, disabled: false }, Validators.compose([Validators.pattern(validationRules.SSN_REGEXP)])),
      'dateOfBirth': new FormControl(basic.dateOfBirth),
      'age': new FormControl({value: '0', disabled: true }),
      'occupation': new FormControl(basic.occupation),
      'phone': phoneGroup
    });
  }

  createPhoneGroup(basicInfo: BasicInformation): FormGroup {
    if (!basicInfo.phone) basicInfo.phone = new Phone();
    return new FormGroup({
      'mobile': new FormControl(basicInfo.phone.mobile, [Validators.pattern(validationRules.PHONE)]),
      'evening': new FormControl(basicInfo.phone.evening, [Validators.pattern(validationRules.PHONE)]),
      'other': new FormControl(basicInfo.phone.other, [Validators.pattern(validationRules.PHONE)]),
      'type': new FormControl(basicInfo.phone.type)
    });
  }

  createMailingAddressGroup(pi: PersonalInformation): FormGroup {
    if (!pi.mailingAddress) pi.mailingAddress = new MailingAddress();
    return new FormGroup({
      'careFirstName': new FormControl(pi.mailingAddress.careFirstName, Validators.compose([Validators.maxLength(45)])),
      'careLastName': new FormControl(pi.mailingAddress.careLastName, Validators.compose([Validators.maxLength(45)])),
      'home1': new FormControl(pi.mailingAddress.home1, Validators.compose([Validators.required])),
      'home2': new FormControl(pi.mailingAddress.home2),
      'zip': new FormControl(pi.mailingAddress.zip, Validators.compose([Validators.required])),
      'city': new FormControl(pi.mailingAddress.city, Validators.compose([Validators.required])),
      'state': new FormControl(pi.mailingAddress.state, Validators.compose([Validators.required])),
      'email': new FormControl(pi.mailingAddress.email, Validators.compose([Validators.required, Validators.pattern(validationRules.EMAIL)]))
    });
  }

  clearDate(): void {
      this.taxForm.patchValue({dateOfBirth: null});
  }

  onDateChanged(event: IMyDateModel, type: string) {
    if (!event.jsdate) return;
    this.taxForm.get(type).patchValue({'age': this.calculateAge(event.jsdate)});
  }

  calculateAge(birthday:Date) {
     var ageDifMs = Date.now() - birthday.getTime();
     var ageDate = new Date(ageDifMs);
     return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  findZip($event, owner: string): void {
    let obj = this.zipCodeUtils.findZipCode(
      this.taxForm.get(owner).get('zip').value,
      this.taxForm.get(owner).get('city'),
      this.taxForm.get(owner).get('state'));
  }

  cleanUpPhone(phone: Phone): Phone {
    phone.mobile = this.maskUtils.removePhoneMask(phone.mobile);
    phone.evening = this.maskUtils.removePhoneMask(phone.evening);
    phone.other = this.maskUtils.removePhoneMask(phone.other);
    return phone;
  }

  removeMask(pi: PersonalInformation): PersonalInformation {
    pi.taxPayer.dateOfBirth = this.maskUtils.retrieveDate(pi.taxPayer.dateOfBirth);
    pi.taxPayer.phone = this.cleanUpPhone(pi.taxPayer.phone);
    pi.spouse.dateOfBirth = this.maskUtils.retrieveDate(pi.spouse.dateOfBirth);
    pi.spouse.phone = this.cleanUpPhone(pi.spouse.phone);
    return pi;
  }

  submitForm(fields: any):void {
    this.pi = this.removeMask(this.taxForm.value);
    this.currentApplicationService.setPersonalInformation(this.pi);
    this.currentApplicationService.updateApplication().subscribe(data => {
      this.toastr.success('Personal Information saved sucessfully', 'Success!');
    });
  }

}
