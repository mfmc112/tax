import { Component, OnInit, ViewChild, ViewContainerRef } from  '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MASKS } from '../enum/masks.enum';
import { PersonalInfoFormComponent } from './personal-info-form.component';
import { Application, PersonalInformation, FilingInformation, W2Form, MailingAddress, Client, Utils } from '../common/';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector:'form-1040-page1',
  templateUrl: './templates/form-1040-page1.component.html'
})
export class Form1040Page1Component implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  numberMask = createNumberMask({ prefix: '$', suffix: '' });
  statusRadio: any;
  application: Application;
  pi: PersonalInformation;
  fi: FilingInformation;
  w2Forms: W2Form[];
  taxForm: FormGroup;
  mailingAddressGroup: FormGroup;
  w2FormSummary: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService
  ){
    this.toastr.setRootViewContainerRef(vcr);
    this.application = this.currentApplicationService.getApplication();
    this.pi = this.application.clientInformation.personalInformation;
    this.mailingAddressGroup = this.createMailingAddressGroup(this.pi);

    this.fi = this.application.clientInformation.filingInformation;
    this.w2Forms = this.application.w2Forms;
    this.w2FormSummary = this.buildW2Summary();

    this.taxForm = formBuilder.group({
      'firstName': [{value: this.pi.taxPayer.firstName, disabled: true}],
      'middleName': [{value: this.pi.taxPayer.initial, disabled: true}],
      'lastName': [{value: this.pi.taxPayer.lastName, disabled: true}],
      'suffixName':[{value: this.pi.taxPayer.suffix, disabled: true}],
      'ssn': [{value: this.pi.taxPayer.ssn, disabled: true }],
      'sFirstName': [{value: this.pi.spouse.firstName, disabled: true }],
      'sMiddleName': [{value: this.pi.spouse.initial, disabled: true }],
      'sLastName': [{value: this.pi.spouse.lastName, disabled: true }],
      'sSuffixName': [{value: this.pi.spouse.suffix, disabled: true }],
      'sSsn': [{value: this.pi.spouse.ssn, disabled: true }],
      'address': this.mailingAddressGroup,
      'payerDonate': false,
      'spouseDonate': false,
      'status': [null, Validators.compose([Validators.required])],
      'w2Summary': this.w2FormSummary
    });
  }

  buildW2Summary(): FormGroup {
    let w2 = this.w2Forms[0];
    if (!w2) w2 = new W2Form(this.application.client);
    return new FormGroup({
      'box7': new FormControl({value: w2.field1, disabled: true }),
      'box8a': new FormControl({value: "0", disabled: true }),
      'box8b': new FormControl({value: "0", disabled: true }),
      'box9a': new FormControl({value: "0", disabled: true }),
      'box9b': new FormControl({value: "0", disabled: true }),
      'itemized': new FormControl(null),
      'box10': new FormControl({value: "0", disabled: true }),
      'box11': new FormControl({value: "0", disabled: true }),
      'box12': new FormControl({value: "0", disabled: true }),
      'box13': new FormControl({value: "0", disabled: true }),
      'dNotRequired': new FormControl(false),
      'box14': new FormControl({value: "0", disabled: true }),
      'box15a': new FormControl({value: "0", disabled: true }),
      'box15arollover': new FormControl(null),
      'box15b': new FormControl({value: "0", disabled: true }),
      'box16a': new FormControl({value: "0", disabled: true }),
      'box16b': new FormControl({value: "0", disabled: true }),
      'box16arollover': new FormControl(false),
      'box17': new FormControl({value: "0", disabled: true }),
      'box18': new FormControl({value: "0", disabled: true }),
      'box19': new FormControl({value: "0", disabled: true }),
      'repaymentPreviousYear1': new FormControl({value: "0", disabled: true }),
      'repaymentPreviousYear2': new FormControl({value: "0", disabled: true }),
      'box20a': new FormControl({value: "0", disabled: true }),
      'box20b': new FormControl({value: "0", disabled: true }),
      'box21Type': new FormControl({value: "", disabled: true }),
      'box21Amount': new FormControl({value: "0", disabled: true }),
      'box22_1': new FormControl({value: w2.field1, disabled: true }),
      'box22_2': new FormControl({value: w2.field1, disabled: true }),
      'box23': new FormControl({value: "0", disabled: true }),
      'box24': new FormControl({value: "0", disabled: true }),
      'box25': new FormControl({value: "0", disabled: true }),
      'box26': new FormControl({value: "0", disabled: true }),
      'box27': new FormControl({value: "0", disabled: true }),
      'box28': new FormControl({value: "0", disabled: true }),
      'box29': new FormControl({value: "0", disabled: true }),
      'box30': new FormControl({value: "0", disabled: true }),
      'box31': new FormControl({value: "0", disabled: true }),
      'box32': new FormControl({value: "0", disabled: true }),
      'box33': new FormControl({value: "0", disabled: true }),
      'box34': new FormControl({value: "0", disabled: true }),
      'box35': new FormControl({value: "0", disabled: true }),
      'box36': new FormControl({value: "0", disabled: true }),
      'box37': new FormControl({value: "0", disabled: true })
    });
  }

  ngOnInit():void {
    this.statusRadio = [
      {value: "single", label:"Single", box:"1"},
      {value: "jointly", label:"Married Filing Jointly (even if only had one income)", box:"2"},
      {value: "separate", label:"Married Filing Separate", box:"3"},
      {value: "head", label:"Head of Household (with qualifying person)", box:"4"},
      {value: "widow", label:"Qualified Widow(er) with dependent child. Year spouse died (2016 or 2017 only)", box:"5"}
    ];
  }

  submitForm(fields: any):void { }

  createMailingAddressGroup(pi: PersonalInformation): FormGroup {
    if (!pi.mailingAddress) pi.mailingAddress = new MailingAddress();
    return new FormGroup({
      'home1': new FormControl({value: pi.mailingAddress.home1, disabled: true }),
      'home2': new FormControl({value: pi.mailingAddress.home2, disabled: true }),
      'zip': new FormControl({value: pi.mailingAddress.zip, disabled: true }),
      'city': new FormControl({value: pi.mailingAddress.city, disabled: true }),
      'state': new FormControl({value: pi.mailingAddress.state, disabled: true })
    });
  }

}
