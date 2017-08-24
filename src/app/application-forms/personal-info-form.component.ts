import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Client } from '../common/client';
import { Phone } from '../common/phone';
import { Application } from '../common/application';
import { PersonalInformation } from '../common/personal-information';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { MyDatePickerModule, IMyDpOptions, IMyDateModel } from 'mydatepicker';


@Component({
  selector: 'personal-info-form',
  templateUrl: './templates/personal-info-form.component.html'
})
export class PersonalInfoFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  taxForm: FormGroup;
  client: Client;
  application: Application;
  pi: PersonalInformation;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService
  ){
    this.application = this.currentApplicationService.getApplication();
    this.pi = this.application.clientInformation.personalInformation;
    if (!this.pi.phone) this.pi.phone = new Phone();
    this.taxForm = formBuilder.group({
      'firstName' : [this.pi.firstName, Validators.compose([Validators.maxLength(45)])],
      'middleName' : this.pi.initial,
      'lastName': [ this.pi.lastName, Validators.compose([Validators.maxLength(45)])],
      'suffixName': this.pi.suffix,
      'ssn' : [{value: this.pi.ssn, disabled: true }, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
      'dateOfBirth': [ this.pi.dateOfBirth, Validators.required],
      'age': '0',
      'occuppation': this.pi.occupation,
      'phone': new FormGroup({
        'mobile': new FormControl(this.pi.phone.mobile, [Validators.pattern(validationRules.PHONE)]),
        'evening': new FormControl(this.pi.phone.evening, [Validators.pattern(validationRules.PHONE)]),
        'other': new FormControl(this.pi.phone.other, [Validators.pattern(validationRules.PHONE)]),
        'type': new FormControl(this.pi.phone.type)
      })
    });

  }

  ngOnInit(): void {
    console.log("1 - " + this.taxForm.get('dateOfBirth').value);
    if (this.taxForm.get('dateOfBirth').value && this.taxForm.get('dateOfBirth').value.date) {
      let date = new Date(
        this.taxForm.get('dateOfBirth').value.date.year,
        this.taxForm.get('dateOfBirth').value.date.month,
        this.taxForm.get('dateOfBirth').value.date.day);
      this.setDate(date);
      this.calculateAge(date);
    }
    this.enableType(this.taxForm.get('phone').get('other').value);

  }

  enableType(field: any): void {
    if (field.value && field.value !== "") this.taxForm.get('phone').get('type').enable();
    else this.taxForm.get('phone').get('type').disable();
  }

  private myDatePickerOptions: IMyDpOptions = {
      maxYear: 2015
  };

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
