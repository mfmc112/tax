import { Component, OnInit, OnDestroy, ViewChild, ViewContainerRef } from  '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MASKS } from '../enum/masks.enum';
import { PersonalInfoFormComponent } from './personal-info-form.component';
import { Application, Form1040, PersonalInformation, FilingInformation, Dependent, BasicInformation, W2Form, MailingAddress, Client, Utils } from '../common/';
import { StringUtils } from '../common/utils/';
import * as _ from "lodash";

@Component({
  selector:'form-1040-page1',
  templateUrl: './templates/form-1040-page1.component.html'
})
export class Form1040Page1Component implements OnInit, OnDestroy {
  stringUtils: StringUtils = new StringUtils();
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  statusRadio: any;
  application: Application;
  form1040: Form1040;
  pi: PersonalInformation;
  fi: FilingInformation;
  dependents: Array<Dependent>;
  w2Forms: W2Form[];
  taxForm: FormGroup;
  mailingAddressGroup: FormGroup;
  form1040Group: FormGroup;
  w2FormSummary: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService
  ){
    this.toastr.setRootViewContainerRef(vcr);
    this.application = this.currentApplicationService.getApplication();
    this.form1040 = this.currentApplicationService.getForm1040();
    this.pi = this.currentApplicationService.getPersonalInformation();
    this.fi = this.currentApplicationService.getFilingInformation();
    this.mailingAddressGroup = this.createMailingAddressGroup(this.pi);
    this.form1040Group = this.createForm1040Group();

    this.w2Forms = this.application.w2Forms;
    this.w2FormSummary = this.buildW2Summary();
    this.dependents = this.currentApplicationService.getDependents();
    let box6cLiveWithYou = 0;
    let box6cNotLiveDueDivorce = 0;
    let box6cNotListedAbove = 0;
    _.each(this.dependents, function(o) {
      if (o.code === 1) box6cLiveWithYou++;
      else if (o.code === 2) box6cNotLiveDueDivorce++;
      else if (o.code === 3) box6cNotListedAbove++;
    });

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
      'status': [{value: this.fi.status, disabled: true }],
      'w2Summary': this.w2FormSummary,
      'form1040': this.form1040Group,
      'box6cLiveWithYou': new FormControl(box6cLiveWithYou),
      'box6cNotLiveDueDivorce': new FormControl(box6cNotLiveDueDivorce),
      'box6cNotListedAbove': new FormControl(box6cNotListedAbove),
      'box6d': new FormControl(0)
    });

    this.calculateBox6ab(null);
  }

  buildW2Summary(): FormGroup {
    let box7 = this.currentApplicationService.calculate1040Box7();
    let w2Field1 = this.currentApplicationService.calculateW2Field1();

    return new FormGroup({
      'box7': new FormControl({value: box7, disabled: true }),
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
      'box22_1': new FormControl({value: box7, disabled: true }),
      'box22_2': new FormControl({value: "0", disabled: true }),
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
      'box35Reforestation': new FormControl({value: "0", disabled: true }),
      'box35SubPay': new FormControl({value: "0", disabled: true }),
      'box35JuryDuty': new FormControl({value: "0", disabled: true }),
      'box35PensionPlan': new FormControl({value: "0", disabled: true }),
      'box35PPR': new FormControl({value: "0", disabled: true }),
      'box35Form2555': new FormControl({value: "0", disabled: true }),
      'box35ArcherMSA': new FormControl({value: "0", disabled: true }),
      'box35BlowerFees': new FormControl({value: "0", disabled: true }),
      'box35Other': new FormControl({value: null, disabled: true }),
      'box35OtherAmount': new FormControl({value: "0", disabled: true }),
      'box36': new FormControl({value: "0", disabled: true }),
      'box37': new FormControl({value: w2Field1, disabled: true })
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

    this.calculateBox6ab(null);
    this.calculateBox21();
    this.calculateBox22()
  }

  ngOnDestroy() : void {
    // save inpout data
    this.submitForm('');
  }

  calculateBox21(): void {
    if (this.application.w2GForms && this.application.w2GForms.length > 0) {
      let sumField1 = 0;
      _.each(this.application.w2GForms, function(o) {
        if (o.field1 && o.field1) sumField1+= o.field1;
      });
      if (sumField1 > 0) this.w2FormSummary.get("box21Type").setValue("GAMBLING WINNINGS");
      this.w2FormSummary.get("box21Amount").setValue(sumField1);
    }
  }

  calculateBox22(): void {
    let box7 = this.w2FormSummary.get("box7").value;
    let box22_2 = box7 + this.w2FormSummary.get("box21Amount").value;
    this.w2FormSummary.get("box22_1").setValue(box7);
    this.w2FormSummary.get("box22_2").setValue(box22_2);
  }

  calculateBox22_2(): void {

  }

  setDefaultsBox6ab() {
    if (this.stringUtils.isEmpty(this.form1040Group.get('box6a').value)) {
      this.form1040Group.get('box6a').setValue(true);
      this.taxForm.markAsTouched();
    }
    if (this.stringUtils.isEmpty(this.form1040Group.get('box6b').value) && this.fi.status === 'jointly') {
      this.form1040Group.get('box6b').patchValue(true);
      this.taxForm.markAsTouched();
    }
  }

  calculateBox6ab($event) {
    let box6ab = 0;
    this.setDefaultsBox6ab();

    if (this.form1040Group.get('box6a').value === true) box6ab++;
    if (this.form1040Group.get('box6b').value === true) box6ab++;
    this.form1040Group.get('box6ab').setValue(box6ab);
    this.calculateBoxD();
  }

  calculateBoxD() {
    let box6d = 0;
    box6d = (
      this.taxForm.get('box6cLiveWithYou').value +
      this.taxForm.get('box6cNotLiveDueDivorce').value +
      this.taxForm.get('box6cNotListedAbove').value
    );

    if (this.form1040Group.get('box6a').value === true) box6d++;
    if (this.form1040Group.get('box6b').value === true) box6d++;

    this.taxForm.get('box6d').setValue(box6d);
  }

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

  createForm1040Group(): FormGroup {
    if (!this.form1040) this.form1040 = new Form1040();
    return new FormGroup({
      'box6a': new FormControl(this.form1040.box6a),
      'box6b': new FormControl(this.form1040.box6b),
      'box6ab': new FormControl({value: this.form1040.box6ab, disabled: true })
    });
  }

  submitForm(fields: any):void {
    if (!this.taxForm.touched) return;
    this.currentApplicationService.setForm1040( this.form1040Group.getRawValue() );
    this.currentApplicationService.updateApplication().subscribe(
      data => {
        this.toastr.success('Form 1040 Page 1 saved sucessfully', 'Success!');
      },err => {
        this.toastr.error('Please go back to Form 1040 Page 1 and try again.', 'Error saving Form1040!');
      }
    );
  }

}
