import { Component, OnInit, ViewChild, DoCheck } from  '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MASKS } from '../enum/masks.enum';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { Application, W2Form, MailingAddress, Client, Utils } from '../common/';
import { NInputComponent, NTextareaComponent, NCheckboxComponent } from '../common/n-components/';
import { NW2Field12Component } from '../common/n-components/n-w2-field12.component';

@Component({
  selector:'w2-form',
  templateUrl: './templates/w2-form.component.html'
})
export class W2FormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-components/n-input.component') nInput: NInputComponent;
  @ViewChild('../common/n-components/n-checkbox.component') nCheckbox: NCheckboxComponent;
  @ViewChild('../common/n-components/n-textarea.component') nTextarea: NTextareaComponent;
  @ViewChild('../common/n-components/n-w2-field12.component') nW2Field12: NW2Field12Component;

  ssnMask: Array<string | RegExp> = MASKS.SSN;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  stateMask:  Array<string | RegExp> = MASKS.STATE;
  numberMask = createNumberMask({ prefix: '$', suffix: '' });
  utils: Utils = new Utils();
  taxForm: FormGroup;
  application: Application;
  w2Form: W2Form;
  address: FormGroup;
  employerAddress: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService ){
      this.application = this.currentApplicationService.getApplication();
      this.w2Form = this.getW2(0, this.application.client);
      // Add the address from personal information prepopulated into the employee fields
      this.address = this.createAddressGroup(this.w2Form.employeeAddress);
      this.employerAddress = this.createAddressGroup(this.w2Form.employerAddress);
      this.taxForm = formBuilder.group({
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
        'employerNameControl': this.w2Form.employerNameControl,
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
        'field9': this.w2Form.field9,
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

    ngOnInit():void {
      this.sameAddress();
      this.autoCalculate(null);
    }

    sameAddress(): void {
      if (this.taxForm.get('sameAddressAsHome').value) {
        this.taxForm.get('employeeAddress').get('home1').setValue(this.application.clientInformation.personalInformation.mailingAddress.home1);
        this.taxForm.get('employeeAddress').get('home2').setValue(this.application.clientInformation.personalInformation.mailingAddress.home2);
        this.taxForm.get('employeeAddress').get('zip').setValue(this.application.clientInformation.personalInformation.mailingAddress.zip);
        this.taxForm.get('employeeAddress').get('city').setValue(this.application.clientInformation.personalInformation.mailingAddress.city);
        this.taxForm.get('employeeAddress').get('state').setValue(this.application.clientInformation.personalInformation.mailingAddress.state);
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
        this.taxForm.get('field3').disable();
        this.taxForm.get('field4').disable();
        this.taxForm.get('field5').disable();
        this.taxForm.get('field6').disable();
        this.calculate(event);
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
        this.taxForm.get('field3').setValue(this.w2Form.field1);
        this.taxForm.get('field4').setValue(this.currentApplicationService.calculateBox4(this.w2Form.field1));
        this.taxForm.get('field5').setValue(this.w2Form.field1);
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

    getW2(index: number, client: Client): W2Form {
      if (!this.application.w2Forms || this.application.w2Forms.length === 0) {
        this.application.w2Forms = [];
        this.application.w2Forms.push(new W2Form(client));
        return this.application.w2Forms[index];
      }
      if (!this.application.w2Forms[index]) return null;
      return this.application.w2Forms[index];
    }

    submitForm(fields: any):void {

    }

}
