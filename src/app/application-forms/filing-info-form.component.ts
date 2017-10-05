import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MaskUtils } from './utils/masks-utils';
import { DatePickerUtils } from './utils/date-picker-utils';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
export class FilingInfoFormComponent implements OnInit, OnDestroy {
  maskUtils: MaskUtils = new MaskUtils();
  datePickerUtils: DatePickerUtils = new DatePickerUtils();
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
  myDatePickerOptions: IMyDpOptions = this.datePickerUtils.myDatePickerOptions;
  defaultMonth: IMyDefaultMonth = this.datePickerUtils.defaultMonth;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService ){
      this.toastr.setRootViewContainerRef(vcr);

      this.application = this.currentApplicationService.getApplication();
      this.fi = this.application.clientInformation.filingInformation;
      if (!this.fi) this.fi = new FilingInformation();

      this.payerSpecialGroup = this.createSpecialProcessig(this.fi.payerSpecialProcessing);
      this.spouseSpecialGroup = this.createSpecialProcessig(this.fi.spouseSpecialProcessing);
      this.taxForm = formBuilder.group({
        'status' : [this.fi.status, Validators.compose([Validators.required])],
        'claimAnother' : this.fi.claimAnother,
        'filingJointlyButSpouseInAnotherPersons' : this.fi.filingJointlyButSpouseInAnotherPersons,
        'headClaimNonResidentialAlienSpouse' : this.fi.headClaimNonResidentialAlienSpouse,
        'disasterDesignation': [this.fi.disasterDesignation],
        'payerSpecialProcessing': this.payerSpecialGroup,
        'spouseSpecialProcessing': this.spouseSpecialGroup,
        'payerDonate': this.fi.payerDonate,
        'spouseDonate': this.fi.spouseDonate
      });
  }

  ngOnInit(): void {
    this.initializeDates();
    this.initializeDropDownOptions();
  }

  ngOnDestroy() : void {
    // save input data
    this.submitForm('');
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
      'deploymentDate': new FormControl(sp.deploymentDate)
    });
  }

  initializeDates() {
    this.datePickerUtils.setDateFromField(this.taxForm.get('payerSpecialProcessing').get('death'), undefined, undefined);
    this.datePickerUtils.setDateFromField(this.taxForm.get('payerSpecialProcessing').get('deploymentDate'), undefined, undefined);
    this.datePickerUtils.setDateFromField(this.taxForm.get('spouseSpecialProcessing').get('death'), undefined, undefined);
    this.datePickerUtils.setDateFromField(this.taxForm.get('spouseSpecialProcessing').get('deploymentDate'), undefined, undefined);
  }

  initializeDropDownOptions() {
    this.yesNoList = [
      {value: "Y", name:"Yes"},
      {value: "N", name:"No"},
    ];

    this.studentTypeList = [
      {name:"N", value:"no"},
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
    ];
  }

  removeMask(fi: FilingInformation): FilingInformation {
    fi.payerSpecialProcessing.death = this.maskUtils.retrieveDate(fi.payerSpecialProcessing.death);
    fi.payerSpecialProcessing.deploymentDate = this.maskUtils.retrieveDate(fi.payerSpecialProcessing.deploymentDate);
    fi.spouseSpecialProcessing.death = this.maskUtils.retrieveDate(fi.spouseSpecialProcessing.death);
    fi.spouseSpecialProcessing.deploymentDate = this.maskUtils.retrieveDate(fi.spouseSpecialProcessing.deploymentDate);
    return fi;
  }

  submitForm(fields: any):void {
    this.fi = this.removeMask(this.taxForm.value);
    this.currentApplicationService.setFilingInformation(this.fi);
    this.currentApplicationService.updateApplication().subscribe(
      data => {
        this.toastr.success('Filing Information saved sucessfully', 'Success!');
      },err => {
        this.toastr.error('Please go back to Filing Information and try again.', 'Error saving Filing Information!');
      }
    );
  }

}
