import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NInputComponent } from '../common/n-components/';
import { MASKS } from '../enum/masks.enum';
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
export class PersonalInfoFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-components/n-input.component') nInput: NInputComponent;
  phoneMask: Array<string | RegExp> = MASKS.PHONE;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  dateMask: Array<string | RegExp> = MASKS.DATE;
  initialMask: Array<string | RegExp> = MASKS.INITIAL;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  stateMask:  Array<string | RegExp> = MASKS.STATE;
  taxForm: FormGroup;
  payerPhoneGroup: FormGroup;
  spousePhoneGroup: FormGroup;
  mailingAddressGroup: FormGroup;
  client: Client;
  application: Application;
  pi: PersonalInformation;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService
  ){
    this.application = this.currentApplicationService.getApplication();
    this.pi = this.application.clientInformation.personalInformation;

    this.payerPhoneGroup = this.createPhoneGroup(this.pi.taxPayer);
    this.spousePhoneGroup = this.createPhoneGroup(this.pi.spouse);
    this.mailingAddressGroup = this.createMailingAddressGroup(this.pi);

    this.taxForm = formBuilder.group({
      'firstName' : [ this.pi.taxPayer.firstName, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'middleName' : [ this.pi.taxPayer.initial, Validators.compose([Validators.maxLength(1)])],
      'lastName': [ this.pi.taxPayer.lastName, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'suffixName': this.pi.taxPayer.suffix,
      'ssn' : [ {value: this.pi.taxPayer.ssn, disabled: true }, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
      'dateOfBirth': [ this.pi.taxPayer.dateOfBirth, Validators.required],
      'age': [ {value: '0', disabled: true }],
      'occuppation': this.pi.taxPayer.occupation,
      'phone': this.payerPhoneGroup,
      'sFirstName' : [ this.pi.spouse.firstName, Validators.compose([ Validators.maxLength(45)])],
      'sMiddleName' : [ this.pi.spouse.initial, Validators.compose([Validators.maxLength(1)])],
      'sLastName': [ this.pi.spouse.lastName, Validators.compose([Validators.maxLength(45)])],
      'sSuffixName': this.pi.spouse.suffix,
      'sSsn' : [ this.pi.spouse.ssn, Validators.compose([Validators.pattern(validationRules.SSN_REGEXP)])],
      'sDateOfBirth': this.pi.spouse.dateOfBirth,
      'sAge': [ {value: '0', disabled: true }],
      'sOccuppation': this.pi.spouse.occupation,
      'sPhone': this.spousePhoneGroup,
      'address': this.mailingAddressGroup,
      'dependents': [false, Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.taxForm.get('dateOfBirth').value && this.taxForm.get('dateOfBirth').value.date) {
      let date = new Date(
        this.taxForm.get('dateOfBirth').value.date.year,
        this.taxForm.get('dateOfBirth').value.date.month,
        this.taxForm.get('dateOfBirth').value.date.day);
      this.setDate(date);
      this.calculateAge(date);
    }
    this.enableType("phone");
    this.enableType("sPhone");
  }

  enableType(type: string): void {
    if (this.taxForm.get(type).get('other').value && this.taxForm.get(type).get('other').value != "") this.taxForm.get(type).get('type').enable();
    else this.taxForm.get(type).get('type').disable();
    this.taxForm.markAsDirty();
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
      'careFirstName': new FormControl(pi.mailingAddress.careFirstName, Validators.compose([Validators.required, Validators.maxLength(45)])),
      'careLastName': new FormControl(pi.mailingAddress.careLastName, Validators.compose([Validators.required, Validators.maxLength(45)])),
      'home1': new FormControl(pi.mailingAddress.home1, Validators.compose([Validators.required])),
      'home2': new FormControl(pi.mailingAddress.home2, Validators.compose([Validators.required])),
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
      defMonth: '01/2015'
  }

  setDate(date: Date): void {
      this.taxForm.patchValue({'dateOfBirth': {
      date: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()}
      }});
  }

  clearDate(): void {
      this.taxForm.patchValue({dateOfBirth: null});
  }

  onDateChanged(event: IMyDateModel) {
    if (!event.jsdate) return;
    this.taxForm.patchValue({'age': this.calculateAge(event.jsdate)});
  }

  calculateAge(birthday:Date) {
   var ageDifMs = Date.now() - birthday.getTime();
   var ageDate = new Date(ageDifMs);
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }

  submitForm(fields: any):void {

  }

}
