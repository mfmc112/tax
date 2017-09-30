import { Component, ViewChild, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NInputComponent } from '../common/n-components/';
import { MASKS } from '../enum/masks.enum';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { Application, Client, Phone, PersonalInformation, BasicInformation, MailingAddress } from '../common';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'personal-info-form',
  templateUrl: './templates/personal-info-form.component.html'
})
export class PersonalInfoFormComponent implements OnInit, OnDestroy {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-components/n-input.component') nInput: NInputComponent;
  phoneMask: Array<string | RegExp> = MASKS.PHONE;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  dateMask: Array<string | RegExp> = MASKS.DATE;
  initialMask: Array<string | RegExp> = MASKS.INITIAL;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  stateMask:  Array<string | RegExp> = MASKS.STATE;
  suffixMask: Array<string | RegExp> = MASKS.NAME_SUFFIX;
  taxForm: FormGroup;
  taxPayerGroup: FormGroup;
  payerPhoneGroup: FormGroup;
  spouseGroup: FormGroup;
  spousePhoneGroup: FormGroup;
  mailingAddressGroup: FormGroup;
  client: Client;
  application: Application;
  pi: PersonalInformation;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private zipCodeApiService: ZipCodeApiService,
    private currentApplicationService: CurrentApplicationService
  ){
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
    this.setDateOfBirth('taxPayer');
    this.setDateOfBirth('spouse');
    this.enableType('taxPayer');
    this.enableType('spouse');
  }

  ngOnDestroy() : void {
    // save inpout data
    this.submitForm('');
  }

  setDateOfBirth(owner: any) {
    if (this.taxForm.get(owner).get('dateOfBirth').value && this.taxForm.get(owner).get('dateOfBirth').value.date) {
      let date = new Date(
        this.taxForm.get(owner).get('dateOfBirth').value.date.year,
        this.taxForm.get(owner).get('dateOfBirth').value.date.month,
        this.taxForm.get(owner).get('dateOfBirth').value.date.day
      );
      this.setDate(date, owner);
      this.taxForm.get(owner).get('age').setValue(this.calculateAge(date));
    } else if (this.taxForm.get(owner).get('dateOfBirth').value) {
      let date = new Date(this.taxForm.get(owner).get('dateOfBirth').value);
      this.setDate(date, owner);
      this.taxForm.get(owner).get('age').setValue(this.calculateAge(date));
    }
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
      'email': new FormControl(pi.mailingAddress.email, Validators.compose([Validators.required, Validators.email]))
    });
  }

  myDatePickerOptions: IMyDpOptions = {
      // maxYear: 2015,
      showTodayBtn: false,
      dateFormat: 'mm/dd/yyyy'
      // disableSince: {year: 2016, month: 1, day: 1}
  };

  defaultMonth: IMyDefaultMonth = {
      defMonth: '01/'+ (new Date().getFullYear()-15)
  }

  setDate(date: Date, owner: string): void {
    this.taxForm.get(owner).get('dateOfBirth').setValue({
      date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
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
    let zipcode = this.taxForm.get(owner).get('zip').value;
    this.findZipCode(zipcode, owner);
  }

  findZipCode(zipcode: number, owner: string) : any {
    this.zipCodeApiService.findByZipCode(zipcode).subscribe(obj => {
      this.taxForm.get(owner).get('city').setValue(obj.city);
      this.taxForm.get(owner).get('state').setValue(obj.state);
    });
  }

  retrieveDate(complexDate: any): Date {
    if (complexDate) {
      if (complexDate.formatted) {
        return new Date(complexDate.formatted);
      } else if (complexDate.date.year) {
        return new Date(complexDate.date.year, complexDate.date.month-1, complexDate.date.day);
      }
    }
    return;
  }

  cleanUpPhone(phone: Phone): Phone {
    if (phone.mobile && isNaN(Number(phone.mobile))) phone.mobile = phone.mobile.replace("(","").replace(")","").replace(" ","").replace("-","");
    if (phone.evening && isNaN(Number(phone.evening))) phone.evening = phone.evening.replace("(","").replace(")","").replace(" ","").replace("-","");
    if (phone.other && isNaN(Number(phone.other))) phone.other = phone.other.replace("(","").replace(")","").replace(" ","").replace("-","");
    return phone;
  }

  submitForm(fields: any):void {
    this.pi = this.taxForm.value;
    // clean up date of birth to save
    this.pi.taxPayer.dateOfBirth = this.retrieveDate(this.pi.taxPayer.dateOfBirth);
    this.pi.taxPayer.phone = this.cleanUpPhone(this.pi.taxPayer.phone);
    this.pi.spouse.dateOfBirth = this.retrieveDate(this.pi.spouse.dateOfBirth);
    this.pi.spouse.phone = this.cleanUpPhone(this.pi.spouse.phone);

    this.currentApplicationService.setPersonalInformation(this.pi);
    this.currentApplicationService.updateApplication().subscribe(data => {
      this.toastr.success('Personal Information saved sucessfully', 'Success!');
    });

  }



}
