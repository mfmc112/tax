import { Component, OnInit, Input, ViewChild, DoCheck, OnDestroy, ViewContainerRef } from  '@angular/core';
import { Transition } from '@uirouter/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MaskUtils } from './utils/masks-utils';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { ZipCodeUtils } from './utils/zip-code-utils';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { Application, PersonalInformation,  W2Form, MailingAddress, Client, Utils } from '../common/';
import { NInputComponent, NTextareaComponent, NCheckboxComponent } from '../common/n-components/';
import { NW2Field12Component } from '../common/n-components/n-w2-field12.component';
import * as _ from 'lodash';

@Component({
  selector:'w2-form',
  templateUrl: './templates/w2-form.component.html'
})
export class W2FormComponent implements OnInit {
  maskUtils: MaskUtils = new MaskUtils();
  zipCodeUtils: ZipCodeUtils;
  utils: Utils = new Utils();

  ssnMask: Array<string | RegExp> = this.maskUtils.MASKS.SSN;
  zipMask:  Array<string | RegExp> = this.maskUtils.MASKS.ZIP;
  stateMask:  Array<string | RegExp> = this.maskUtils.MASKS.STATE;
  numberMask = createNumberMask({ prefix: '$', suffix: '.00' });
  taxForm: FormGroup;
  application: Application;
  w2Form: W2Form;
  address: FormGroup;
  employerAddress: FormGroup;
  w2Id: string;

  constructor(
    private formBuilder: FormBuilder,
    private trans: Transition,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private zipCodeApiService: ZipCodeApiService,
    private currentApplicationService: CurrentApplicationService ){
      this.zipCodeUtils = new ZipCodeUtils(zipCodeApiService);
      this.toastr.setRootViewContainerRef(vcr);

      this.application = this.currentApplicationService.getApplication();
      this.w2Form = this.getW2(trans.params().id);
      this.address = this.createAddressGroup(this.w2Form.employeeAddress);
      this.employerAddress = this.createAddressGroup(this.w2Form.employerAddress);
      this.taxForm = this.createTaxForm(formBuilder);
    }

    ngOnInit():void {
      if (this.taxForm.get('sameAddressAsHome').value === undefined || this.taxForm.get('sameAddressAsHome').value === null) {
        this.taxForm.get('sameAddressAsHome').setValue(true);
      }
      this.sameAddress(null);
      this.autoCalculate(null);
      this.populateENC(null);
    }

    ngOnDestroy() : void {
      // save inpout data
      this.submitForm('');
    }

    createTaxForm(formBuilder: FormBuilder): FormGroup {
      return formBuilder.group({
        'w2For' : [this.w2Form.w2For, Validators.compose([Validators.required])],
        'employeeName' : [{value: this.w2Form.employeeName, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.STRING)])],
        'ssn' : [{value: this.w2Form.ssn, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
        'ssnDoesntMatch' : this.w2Form.ssnDoesntMatch,
        'payerAddressShown': this.w2Form.payerAddressShown,
        'sameAddressAsHome': this.w2Form.sameAddressAsHome,
        'employeeAddress': this.address,
        'alteredOrHandwritten': this.w2Form.alteredOrHandwritten,
        'corrected': this.w2Form.corrected,
        'securityInfo': this.w2Form.securityInfo,
        'ein': this.w2Form.ein,
        'employerName': this.w2Form.employerName,
        'employerNameControl': [{value:this.w2Form.employerNameControl, disabled:true}],
        'employerAddress': this.employerAddress,
        'autoCalculate3and6': this.w2Form.autoCalculate3and6,
        'field1': this.w2Form.field1,
        'field2': this.w2Form.field2,
        'field3': this.w2Form.field3,
        'field4': this.w2Form.field4,
        'field5': this.w2Form.field5,
        'field6': this.w2Form.field6,
        'field7': this.w2Form.field7,
        'field8': this.w2Form.field8,
        'field9': [{value: this.w2Form.field9, disabled:true}],
        'field10': this.w2Form.field10,
        'field11': this.w2Form.field11,
        'field12a1': this.w2Form.field12a1,
        'field12a2': this.w2Form.field12a2,
        'field12b1': this.w2Form.field12b1,
        'field12b2': this.w2Form.field12b2,
        'field12c1': this.w2Form.field12c1,
        'field12c2': this.w2Form.field12c2,
        'field12d1': this.w2Form.field12d1,
        'field12d2': this.w2Form.field12d2,
        'field13Statutory': this.w2Form.field13Statutory,
        'field13Retirement': this.w2Form.field13Retirement,
        'field13SickPay': this.w2Form.field13SickPay,
        'field14': this.w2Form.field14,
        'field16': this.w2Form.field16,
        'field17': this.w2Form.field17,
        'field18': this.w2Form.field18,
        'field19': this.w2Form.field19,
        'field20': this.w2Form.field20,
        'state': this.w2Form.state,
        'esin': this.w2Form.esin
      });
    }

    populateENC($event): void {
      if (this.taxForm.get('employerName').value) {
        let controlName = this.taxForm.get('employerName').value.substring(0,(this.taxForm.get('employerName').value.length > 4 ? 4 : this.taxForm.get('employerName').value.length ));
        this.taxForm.get('employerNameControl').patchValue(_.toUpper(controlName));
      }
    }

    sameAddress($event): void {
      if (this.taxForm.get('sameAddressAsHome').value) {
        let address: MailingAddress = this.application.clientInformation.personalInformation.mailingAddress;
        this.taxForm.get('employeeAddress').get('home1').setValue(address.home1);
        this.taxForm.get('employeeAddress').get('home2').setValue(address.home2);
        this.taxForm.get('employeeAddress').get('zip').setValue(address.zip);
        this.taxForm.get('employeeAddress').get('city').setValue(address.city);
        this.taxForm.get('employeeAddress').get('state').setValue(address.state);
      } else {
        this.taxForm.get('employeeAddress').get('home1').reset();
        this.taxForm.get('employeeAddress').get('home2').reset();
        this.taxForm.get('employeeAddress').get('zip').reset();
        this.taxForm.get('employeeAddress').get('city').reset();
        this.taxForm.get('employeeAddress').get('state').reset();
      }
    }

    calculate(event): void {
      if(this.currentApplicationService.getApplication()) {
        this.removeCurrencyMask();
        this.populateCalculation();
        this.currentApplicationService.calculate();
      }
    }

    /**
     * remove the currency from box1 through 10 and add to the w2Form obj
     */
    removeCurrencyMask(): void {
      for (let i=1; i<=10; i++) {
        this.w2Form['field'+i] = this.utils.removeCurrencyFormat(this.taxForm.get('field'+i).value);
      }
    }

    autoCalculate(event: object): void {
      if (this.populateCalculation()) {
        this.calculate(event);
        this.taxForm.get('field3').disable();
        this.taxForm.get('field4').disable();
        this.taxForm.get('field5').disable();
        this.taxForm.get('field6').disable();
      } else {
        this.taxForm.get('field3').reset();
        this.taxForm.get('field4').reset();
        this.taxForm.get('field5').reset();
        this.taxForm.get('field6').reset();
        this.w2Form.field3 = 0;
        this.w2Form.field4 = 0;
        this.w2Form.field5 = 0;
        this.w2Form.field6 = 0;
        this.taxForm.get('field3').enable();
        this.taxForm.get('field4').enable();
        this.taxForm.get('field5').enable();
        this.taxForm.get('field6').enable();
      }
    }

    populateCalculation(): boolean {
      if (this.taxForm.get('autoCalculate3and6').value) {

        this.taxForm.get('field3').setValue(this.taxForm.get('field1').value);
        this.taxForm.get('field4').setValue(this.currentApplicationService.calculateBox4(this.w2Form.field1));
        this.taxForm.get('field5').setValue(this.taxForm.get('field1').value);
        this.taxForm.get('field6').setValue(this.currentApplicationService.calculateBox6(this.w2Form.field1));
      }
      return (this.taxForm.get('autoCalculate3and6').value);
    }

    createAddressGroup(address: MailingAddress): FormGroup {
      if (!address) address = new MailingAddress();
      return new FormGroup({
        'home1': new FormControl(address.home1, Validators.compose([Validators.required])),
        'home2': new FormControl(address.home2),
        'zip': new FormControl(address.zip, Validators.compose([Validators.required])),
        'city': new FormControl(address.city, Validators.compose([Validators.required])),
        'state': new FormControl(address.state, Validators.compose([Validators.required]))
      });
    }

    getW2(id: string): W2Form {
      this.w2Id = id;
      return this.currentApplicationService.getW2FromList(id);
    }

    findZip($event, owner: string): void {
      let obj = this.zipCodeUtils.findZipCode(
        this.taxForm.get(owner).get('zip').value,
        this.taxForm.get(owner).get('city'),
        this.taxForm.get(owner).get('state'));
    }

    cleanAmount(w2: any): any {
      w2.field1 = this.maskUtils.cleanAmount(w2.field1);
      w2.field2 = this.maskUtils.cleanAmount(w2.field2);
      w2.field3 = this.maskUtils.cleanAmount(w2.field3);
      w2.field4 = this.maskUtils.cleanAmount(w2.field4);
      w2.field5 = this.maskUtils.cleanAmount(w2.field5);
      w2.field6 = this.maskUtils.cleanAmount(w2.field6);
      w2.field7 = this.maskUtils.cleanAmount(w2.field7);
      w2.field8 = this.maskUtils.cleanAmount(w2.field8);
      w2.field9 = this.maskUtils.cleanAmount(w2.field9);
      w2.field10 = this.maskUtils.cleanAmount(w2.field10);
      w2.field12a2 = this.maskUtils.cleanAmount(w2.field12a2);
      w2.field12b2 = this.maskUtils.cleanAmount(w2.field12b2);
      w2.field12c2 = this.maskUtils.cleanAmount(w2.field12c2);
      w2.field12d2 = this.maskUtils.cleanAmount(w2.field12d2);
      return w2;
    }

    submitForm(fields: any):void {
      let w2 = this.taxForm.value;
      w2 = this.cleanAmount(w2);
      w2._id = this.w2Id;
      this.currentApplicationService.saveW2(this.w2Id, w2);
      this.currentApplicationService.updateApplication().subscribe(data => {
        let employerName = (this.taxForm.get('employerName').value)? "(" + this.taxForm.get('employerName').value + ")": "";
        this.toastr.success('W2 ' + employerName + 'saved sucessfully', 'Success!');
      });
    }

}
