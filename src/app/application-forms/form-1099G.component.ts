import { Component, OnInit, Input, ViewChild, DoCheck, OnDestroy, ViewContainerRef } from  '@angular/core';
import { Transition } from '@uirouter/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';

import { DatePickerUtils } from './utils/date-picker-utils';
import { MaskUtils } from './utils/masks-utils';
import { ZipCodeApiService } from '../common/api/zip-code-api.service';
import { ZipCodeUtils } from './utils/zip-code-utils';
import { StringUtils } from '../common/utils/';

import { Application, PersonalInformation, BasicInformation,  Form1099G, MailingAddress, Client, Utils } from '../common/';
import { NInputComponent, NMoneyComponent, NTextareaComponent, NCheckboxComponent } from '../common/n-components/';
import { NW2Field12Component } from '../common/n-components/n-w2-field12.component';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

import * as _ from 'lodash';

@Component({
  selector:'form-1099g',
  templateUrl: './templates/form-1099g.component.html'
})
export class Form1099GComponent implements OnInit {
  stringUtils: StringUtils = new StringUtils();
  maskUtils: MaskUtils = new MaskUtils();
  datePickerUtils: DatePickerUtils = new DatePickerUtils();
  zipCodeUtils: ZipCodeUtils;
  utils: Utils = new Utils();
  year: number;

  phoneMask: Array<string | RegExp> = this.maskUtils.MASKS.PHONE;
  ssnMask: Array<string | RegExp> = this.maskUtils.MASKS.SSN;
  einMask: Array<string | RegExp> = this.maskUtils.MASKS.EIN;
  zipMask:  Array<string | RegExp> = this.maskUtils.MASKS.ZIP;
  stateMask:  Array<string | RegExp> = this.maskUtils.MASKS.STATE;
  myDatePickerOptions: IMyDpOptions = this.datePickerUtils.myDatePickerOptions;
  defaultMonth: IMyDefaultMonth = this.datePickerUtils.defaultMonth;
  taxForm: FormGroup;
  application: Application;
  form1099G: Form1099G;
  addressGroup: FormGroup;
  payerAddressGroup: FormGroup;
  form1099gId: string;

  constructor(
    private formBuilder: FormBuilder,
    private trans: Transition,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private zipCodeApiService: ZipCodeApiService,
    private currentApplicationService: CurrentApplicationService ){
      this.zipCodeUtils = new ZipCodeUtils(zipCodeApiService);
      this.toastr.setRootViewContainerRef(vcr);

      this.application = this.currentApplicationService.getApplication();
      this.year = this.application.year;
      this.form1099G = this.get1099G(trans.params().id);
      this.taxForm = this.createTaxForm(formBuilder);
    }

    ngOnInit():void {
      if (this.taxForm.get('sameAddressAsHome').value === undefined || this.taxForm.get('sameAddressAsHome').value === null) {
        this.taxForm.get('sameAddressAsHome').setValue(true);
      }
      this.sameAddress(null);
      if (!this.hasSpouse()){

        this.taxForm.get('form1099gFor').setValue("taxpayer");
        this.taxForm.get('form1099gFor').disable();
      }
      this.setRecipientsName();
      this.requireField3(null);
      this.changeField10a();
      this.changeField10b();
      this.changeField11();
      this.initializeDropdownOptions();
    }

    ngOnDestroy() : void {
      this.submitForm('');
    }

    createTaxForm(formBuilder: FormBuilder): FormGroup {
      this.addressGroup = this.createAddressGroup(this.form1099G.address);
      this.payerAddressGroup = this.createAddressGroup(this.form1099G.payerAddress);

      return formBuilder.group({
        'form1099gFor': [this.form1099G.form1099gFor, Validators.compose([Validators.required])],
        'name': [{value: this.form1099G.name, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.STRING)])],
        'ssn': [{value: this.form1099G.ssn, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
        'accountNumber': this.form1099G.accountNumber,
        'address': this.addressGroup,
        'sameAddressAsHome': this.form1099G.sameAddressAsHome,
        'alteredOrHandwritten': this.form1099G.alteredOrHandwritten,
        'payerEin': [this.form1099G.payerEin,Validators.compose([Validators.pattern(validationRules.EIN_REGEXP)])],
        'payerName': [this.form1099G.payerName, Validators.compose([Validators.required])],
        'payerCareOf': this.form1099G.payerCareOf,
        'payerAddress': this.payerAddressGroup,
        'payerPhone': this.form1099G.payerPhone,
        'corrected': this.form1099G.corrected,
        'field1': this.form1099G.field1?this.form1099G.field1:0,
        'field2': this.form1099G.field2,
        'field2State': this.form1099G.field2,
        'field3': this.form1099G.field3,
        'field4': this.form1099G.field4?this.form1099G.field4:0,
        'field10a': this.form1099G.field10a,
        'field10b': this.form1099G.field10b,
        'field11': this.form1099G.field11
      });
    }

    sameAddress($event): void {
      if (this.taxForm.get('sameAddressAsHome').value) {
        let address: MailingAddress = this.application.clientInformation.personalInformation.mailingAddress;
        this.taxForm.get('address').get('home1').setValue(address.home1);
        this.taxForm.get('address').get('home2').setValue(address.home2);
        this.taxForm.get('address').get('zip').setValue(address.zip);
        this.taxForm.get('address').get('city').setValue(address.city);
        this.taxForm.get('address').get('state').setValue(address.state);
      } else {
        this.taxForm.get('address').get('home1').reset();
        this.taxForm.get('address').get('home2').reset();
        this.taxForm.get('address').get('zip').reset();
        this.taxForm.get('address').get('city').reset();
        this.taxForm.get('address').get('state').reset();
      }
    }


    setRecipientsName(): void {
        let form1099gFor = this.taxForm.get('form1099gFor').value;
        let basicInfo: BasicInformation = this.application.clientInformation.personalInformation.taxPayer;
        if (form1099gFor && form1099gFor === 'spouse' && basicInfo) {
          basicInfo = this.application.clientInformation.personalInformation.spouse;
        }
        let middleName = ((basicInfo.initial) ? basicInfo.initial : "");
        this.taxForm.get('name').setValue(basicInfo.firstName + " " + middleName + " " + basicInfo.lastName);
        this.taxForm.get('ssn').setValue(basicInfo.ssn);
    }

    initializeDropdownOptions(): void {

    }

    removeCurrencyMask(): void {
      this.form1099G['field1'] = this.utils.removeCurrencyFormat(this.taxForm.get('field1').value);
      this.form1099G['field4'] = this.utils.removeCurrencyFormat(this.taxForm.get('field4').value);
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

    get1099G(id: string): Form1099G {
      let form1099g: Form1099G = this.currentApplicationService.getForm1099GFromList(id);
      if (!form1099g) form1099g = new Form1099G(this.currentApplicationService.getClient());
      this.form1099gId = form1099g._id;
      return form1099g;
    }

    saveForm1099G(id: string): Form1099G {
      let form1099g = this.taxForm.getRawValue();
      form1099g._id = this.form1099gId;
      form1099g = this.cleanAmount(form1099g);
      this.currentApplicationService.saveForm1099G(this.form1099gId, form1099g);
      return form1099g;
    }

    findZip($event, owner: string): void {
      let obj = this.zipCodeUtils.findZipCode(
        this.taxForm.get(owner).get('zip').value,
        this.taxForm.get(owner).get('city'),
        this.taxForm.get(owner).get('state'));
    }

    requireField3($event) {
      if (this.stringUtils.isEmpty(this.taxForm.get('field2').value) && this.stringUtils.isEmpty(this.taxForm.get('field2State').value)) {
        this.taxForm.get('field3').setValidators([]);
      } else {
        this.taxForm.get('field3').setValidators([Validators.required]);
      }
      this.taxForm.get('field3').updateValueAndValidity();
    }

    changeField10a(): void {
      const filed10a$ = this.taxForm.get('field10a').value;
      if (!filed10a$ || filed10a$ === '') {
        this.taxForm.get('field10b').setValidators([]);
        this.taxForm.get('field11').setValidators([]);
      } else {
        this.taxForm.get('field10b').setValidators([Validators.required]);
        this.taxForm.get('field11').setValidators([Validators.required]);
      }
      this.taxForm.get('field10b').updateValueAndValidity();
      this.taxForm.get('field11').updateValueAndValidity();
    }

    changeField10b(): void {
      const field10b$ = this.taxForm.get('field10b').value;
      if (!field10b$ || field10b$ === '') {
        this.taxForm.get('field10a').setValidators([]);
        this.taxForm.get('field11').setValidators([]);
      } else {
        this.taxForm.get('field10a').setValidators([Validators.required]);
        this.taxForm.get('field11').setValidators([Validators.required]);
      }
      this.taxForm.get('field10a').updateValueAndValidity();
      this.taxForm.get('field11').updateValueAndValidity();
    }

    changeField11(): void {
      const field11$ = this.taxForm.get('field11').value;
      if (!field11$ || field11$ === '') {
        this.taxForm.get('field10a').setValidators([]);
        this.taxForm.get('field10b').setValidators([]);
      } else {
        this.taxForm.get('field10a').setValidators([Validators.required]);
        this.taxForm.get('field10b').setValidators([Validators.required]);
      }
      this.taxForm.get('field10a').updateValueAndValidity();
      this.taxForm.get('field10b').updateValueAndValidity();
    }

    cleanAmount(form1099g: any): any {
      form1099g.field1 = this.maskUtils.cleanAmount(form1099g.field1);
      form1099g.field4 = this.maskUtils.cleanAmount(form1099g.field4);
      return form1099g;
    }

    hasSpouse(): boolean {
      if (!this.application.clientInformation.personalInformation.spouse) return false;
      if (!this.application.clientInformation.personalInformation.spouse.firstName) return false;
      if (!this.application.clientInformation.personalInformation.spouse.lastName) return false;
      return true;
    }

    submitForm(fields: any):void {
      if (!this.taxForm.touched) return;
      let self = this;
      let form1099g = this.saveForm1099G(this.form1099gId);

      let payerName = (this.taxForm.get('payerName').value)? "(" + this.taxForm.get('payerName').value + ")": "";
      this.currentApplicationService.updateApplication().subscribe(
        data => {
          self.currentApplicationService.retrieveApplication(this.currentApplicationService.getApplication()._id).subscribe(
            data => {
              self.currentApplicationService.setForms1099G(data.forms1099G);
              self.toastr.success('1099-G ' + payerName + 'saved sucessfully', 'Success!');
            }
          );
        },err => {
          this.toastr.error('Please go back to 1099-G ' + payerName + ' and try again.', 'Error saving 1099-G ' + payerName + '!');
        }
      );
    }
}
