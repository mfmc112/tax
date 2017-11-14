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

import { Application, PersonalInformation, BasicInformation,  W2GForm, MailingAddress, Client, Utils } from '../common/';
import { NInputComponent, NMoneyComponent, NTextareaComponent, NCheckboxComponent } from '../common/n-components/';
import { NW2Field12Component } from '../common/n-components/n-w2-field12.component';
import { MyDatePickerModule, IMyDefaultMonth, IMyDpOptions, IMyDateModel } from 'mydatepicker';

import * as _ from 'lodash';

@Component({
  selector:'w2',
  templateUrl: './templates/w2g.component.html'
})
export class W2GComponent implements OnInit {
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
  w2GForm: W2GForm;
  addressGroup: FormGroup;
  payerAddressGroup: FormGroup;
  w2gId: string;

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
      this.w2GForm = this.getW2G(trans.params().id);
      this.taxForm = this.createTaxForm(formBuilder);
    }

    ngOnInit():void {
      if (this.taxForm.get('sameAddressAsHome').value === undefined || this.taxForm.get('sameAddressAsHome').value === null) {
        this.taxForm.get('sameAddressAsHome').setValue(true);
      }
      this.sameAddress(null);
      if (!this.hasSpouse()){
        this.taxForm.get('w2gFor').setValue("taxpayer");
        this.taxForm.get('w2gFor').disable();
      }
      this.setWinnersName();
      this.initializeDropdownOptions();
    }

    ngOnDestroy() : void {
      // save inpout data
      this.submitForm('');
    }

    createTaxForm(formBuilder: FormBuilder): FormGroup {
      this.addressGroup = this.createAddressGroup(this.w2GForm.address);
      this.payerAddressGroup = this.createAddressGroup(this.w2GForm.payerAddress);

      return formBuilder.group({
        'w2gFor': [this.w2GForm.w2gFor, Validators.compose([Validators.required])],
        'name': [{value: this.w2GForm.name, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.STRING)])],
        'ssn': [{value: this.w2GForm.ssn, disabled:true}, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
        'isIdEin': this.w2GForm.isIdEin,
        'address': this.addressGroup,
        'sameAddressAsHome': this.w2GForm.sameAddressAsHome,
        'alteredOrHandwritten': this.w2GForm.alteredOrHandwritten,
        'payerEin': [this.w2GForm.payerEin,Validators.compose([Validators.pattern(validationRules.EIN_REGEXP)])],
        'payerName': this.w2GForm.payerName,
        'payerCareOf': this.w2GForm.payerCareOf,
        'payerAddress': this.payerAddressGroup,
        'payerPhone': this.w2GForm.payerPhone,
        'corrected': this.w2GForm.corrected,
        'field1': this.w2GForm.field1?this.w2GForm.field1:0,
        'field2': this.w2GForm.field2,
        'field3': this.w2GForm.field3,
        'field4': this.w2GForm.field4?this.w2GForm.field4:0,
        'field5': this.w2GForm.field5,
        'field6': this.w2GForm.field6,
        'field7': this.w2GForm.field7?this.w2GForm.field7:0,
        'field8': this.w2GForm.field8,
        'field9': [{value: this.w2GForm.field9, disabled:true}],
        'field10': this.w2GForm.field10,
        'field11': this.w2GForm.field11,
        'field12': this.w2GForm.field12,
        'field13State': this.w2GForm.field13State,
        'field13Number': this.w2GForm.field13Number,
        'field14': this.w2GForm.field14?this.w2GForm.field14:0,
        'field15': this.w2GForm.field15?this.w2GForm.field15:0,
        'field16': this.w2GForm.field16?this.w2GForm.field16:0,
        'field17': this.w2GForm.field17?this.w2GForm.field17:0,
        'field18': this.w2GForm.field18
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


    setWinnersName(): void {
        let w2gFor = this.taxForm.get('w2gFor').value;
        let basicInfo: BasicInformation = this.application.clientInformation.personalInformation.taxPayer;
        if (w2gFor && w2gFor === 'spouse' && basicInfo) {
          basicInfo = this.application.clientInformation.personalInformation.spouse;
        }
        let middleName = ((basicInfo.initial) ? basicInfo.initial : "");
        this.taxForm.get('name').setValue(basicInfo.firstName + " " + middleName + " " + basicInfo.lastName);
        this.taxForm.get('ssn').setValue(basicInfo.ssn);
        this.taxForm.get('field9').setValue(basicInfo.ssn);
    }

    initializeDropdownOptions(): void {

    }

    calculate(event): void {
      if(this.currentApplicationService.getApplication()) {
        this.removeCurrencyMask();
        this.saveW2G(this.w2gId);
        this.currentApplicationService.calculate();
      }
    }

    /**
     * remove the currency from amount fields
     */
    removeCurrencyMask(): void {
      this.w2GForm['field1'] = this.utils.removeCurrencyFormat(this.taxForm.get('field1').value);
      this.w2GForm['field4'] = this.utils.removeCurrencyFormat(this.taxForm.get('field4').value);
      this.w2GForm['field7'] = this.utils.removeCurrencyFormat(this.taxForm.get('field7').value);
      this.w2GForm['field14'] = this.utils.removeCurrencyFormat(this.taxForm.get('field14').value);
      this.w2GForm['field15'] = this.utils.removeCurrencyFormat(this.taxForm.get('field15').value);
      this.w2GForm['field16'] = this.utils.removeCurrencyFormat(this.taxForm.get('field16').value);
      this.w2GForm['field17'] = this.utils.removeCurrencyFormat(this.taxForm.get('field17').value);
    }

    createAddressGroup(address: MailingAddress): FormGroup {
      if (!address) address = new MailingAddress();
      return new FormGroup({
        'home1': new FormControl(address.home1),
        'home2': new FormControl(address.home2),
        'zip': new FormControl(address.zip),
        'city': new FormControl(address.city),
        'state': new FormControl(address.state)
      });
    }

    getW2G(id: string): W2GForm {
      let w2g: W2GForm = this.currentApplicationService.getW2GFromList(id);
      if (!w2g) w2g = new W2GForm(this.currentApplicationService.getClient());
      this.w2gId = w2g._id;
      return w2g;
    }

    saveW2G(id: string): W2GForm {
      let w2g = this.taxForm.getRawValue();
      w2g._id = this.w2gId;
      w2g = this.cleanAmount(w2g);
      this.currentApplicationService.saveW2G(this.w2gId, w2g);
      return w2g;
    }

    findZip($event, owner: string): void {
      if (!this.taxForm.get(owner) || !this.taxForm.get(owner).value) return;

      let obj = this.zipCodeUtils.findZipCode(
        this.taxForm.get(owner).get('zip').value,
        this.taxForm.get(owner).get('city'),
        this.taxForm.get(owner).get('state'));
    }

    cleanAmount(w2: any): any {
      w2.field1 = this.maskUtils.cleanAmount(w2.field1);
      w2.field4 = this.maskUtils.cleanAmount(w2.field4);
      w2.field7 = this.maskUtils.cleanAmount(w2.field7);
      w2.field14 = this.maskUtils.cleanAmount(w2.field14);
      w2.field15 = this.maskUtils.cleanAmount(w2.field15);
      w2.field16 = this.maskUtils.cleanAmount(w2.field16);
      w2.field17 = this.maskUtils.cleanAmount(w2.field17);
      return w2;
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
      let w2g = this.saveW2G(this.w2gId)

      let payerName = (this.taxForm.get('payerName').value)? "(" + this.taxForm.get('payerName').value + ")": "";
      this.currentApplicationService.updateApplication().subscribe(
        data => {
          self.currentApplicationService.retrieveApplication(this.currentApplicationService.getApplication()._id).subscribe(
            data => {
              self.currentApplicationService.setW2Forms(data.w2Forms);
              self.toastr.success('W-2G ' + payerName + 'saved sucessfully', 'Success!');
            }
          );
        },err => {
          this.toastr.error('Please go back to W-2G ' + payerName + ' and try again.', 'Error saving W-2G ' + payerName + '!');
        }
      );
    }
}
