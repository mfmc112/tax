import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Client } from '../common/client';
import { Application } from '../common/application';
import { PersonalInformation } from '../common/personal-information';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { MyDatePickerModule, IMyDateModel } from 'mydatepicker';


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
    this.taxForm = formBuilder.group({
      'firstName' : [this.pi.firstName, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'middleName' : this.pi.initial,
      'lastName': [this.pi.lastName, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'suffixName': this.pi.sufix,
      'ssn' : [this.pi.ssn, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
      'dateOfBirth': [null, Validators.required],
      'age': '',
      'occuppation': ''
    });

  }
  ngOnInit(): void {

  }

  // private myDatePickerOptions: IMyOptions = {
  //      dateFormat: 'dd.mm.yyyy',
  //      height: '34px',
  //      width: '210px',
  //      inline: false
  //  };

  setDate(): void {
      // Set today date using the patchValue function
      let date = new Date();
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
