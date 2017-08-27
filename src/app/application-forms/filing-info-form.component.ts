import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NInputComponent } from '../common/n-input.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Client } from '../common/';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'filing-info-form',
  templateUrl: './templates/filing-info-form.component.html',
  styleUrls: ['../common/templates/n-input.component.css']
})
export class FilingInfoFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-input.component') nInput: NInputComponent;
  taxForm: FormGroup;
  client: Client;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService ){

    this.taxForm = formBuilder.group({
      'disaster': [null, Validators.required],
      'status' : [null, Validators.compose([Validators.required])],
      'claimAnother' : '',
      'spouseAnother' : '',
      'nonResidentialSpouse' : '',
      'payerStudent': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'spouseStudent': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'payerArmedForces': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'spouseArmedForces' : [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'payerBlind': null,
      'spouseBlind': null,
      'payerDisabled': null,
      'spouseDisabled': null,
      'taxpayerDeath': null,
      'spouseDeath': null
    });
  }

  ngOnInit(): void {

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

  submitForm(fields: any):void {

  }

}
