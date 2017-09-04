import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Client, Application, FilingInformation, SpecialProcessing } from '../common';
import { NInputComponent, NRadioListComponent } from '../common/n-components/';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
  selector: 'filing-info-form',
  templateUrl: './templates/filing-info-form.component.html'
})
export class FilingInfoFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-components/n-input.component') nInput: NInputComponent;
  @ViewChild('../common/n-components/n-radio-list.component') nRadio: NRadioListComponent;
  taxForm: FormGroup;
  payerSpecialGroup: FormGroup;
  spouseSpecialGroup: FormGroup;
  application: Application;
  fi: FilingInformation;
  client: Client;
  yesNoList: any;
  studentTypeList: any;
  statusRadio: any;
  specialMilitaryList: any;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService ){

    this.application = this.currentApplicationService.getApplication();
    this.fi = this.application.clientInformation.filingInformation;
    if (!this.fi) this.fi = new FilingInformation();

    this.payerSpecialGroup = this.createSpecialProcessig(this.fi.payerSpecialProcessing);
    this.spouseSpecialGroup = this.createSpecialProcessig(this.fi.spouseSpecialProcessing);
    this.taxForm = formBuilder.group({
      'status' : [null, Validators.compose([Validators.required])],
      'claimAnother' : '',
      'filingJointlyButSpouseInAnotherPersons' : '',
      'headClaimNonResidentialAlienSpouse' : '',
      'disasterDesignation': [null, Validators.required],
      'payerSpecialProcessing': this.payerSpecialGroup,
      'spouseSpecialProcessing': this.spouseSpecialGroup,
      'payerDonate': false,
      'spouseDonate': false
    });
  }

  ngOnInit(): void {
    this.yesNoList = [
      {value: "yes", name:"Yes"},
      {value: "no", name:"No"},
    ];

    this.studentTypeList = [
      {name:"No", value:"no"},
      {name:"Full-Time", value:"full-time"},
      {name:"Part-Time", value:"part-time"},
    ];

    this.statusRadio = [
      {value: "single", label:"Single"},
      {value: "jointly", label:"Married Filing Jointly (even if only had one income)"},
      {value: "separate", label:"Married Filing Separate"},
      {value: "head", label:"Head of Household (with qualifying person)"},
      {value: "widow", label:"Qualified Widow(er) with dependent child. Year spouse died (2016 or 2017 only)"}
    ];

    this.specialMilitaryList = [
        {name:"Desert Storm", value:"Desert Storm"},
        {name:"Enduring Freedom", value:"Enduring Freedom"},
        {name:"Former Yugoslavia", value:"Former Yugoslavia"},
        {name:"Haiti", value:"Haiti"},
        {name:"Iraqi Freedom", value:"Iraqi Freedom"},
        {name:"Joint Guard", value:"Joint Guard"},
        {name:"Joint Forge", value:"Joint Forge"},
        {name:"Kosovo Operations", value:"Kosovo Operations"},
        {name:"Northern Forge", value:"Northern Forge"},
        {name:"Northern Watch", value:"Northern Watch"},
        {name:"Operation Allied Force", value:"Operation Allied Force"},
        {name:"UN Operation", value:"UN Operation"}
    ]
  }

  createSpecialProcessig(sp: SpecialProcessing): FormGroup {
    if (!sp) sp = new SpecialProcessing();
    return new FormGroup({
      'student': new FormControl(sp.student),
      'armedForces': new FormControl(sp.armedForces),
      'blind': new FormControl(sp.blind),
      'disabled': new FormControl(sp.disabled),
      'death': new FormControl(sp.death),
      'specialMilitary': new FormControl(sp.specialMilitary),
      'deploymentDate': new FormControl(null)
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

  submitForm(fields: any):void {

  }

}
