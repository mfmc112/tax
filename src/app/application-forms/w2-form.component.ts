import { Component, ViewChild, DoCheck } from  '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MASKS } from '../enum/masks.enum';
import { Application, W2Form, MailingAddress, Client } from '../common/';
import { NInputComponent, NCheckboxComponent } from '../common/n-components/';

@Component({
  selector:'w2-form',
  templateUrl: './templates/w2-form.component.html'
})
export class W2FormComponent {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  @ViewChild('../common/n-components/n-input.component') nInput: NInputComponent;
  @ViewChild('../common/n-components/n-checkbox.component') nCheckbox: NCheckboxComponent;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  stateMask:  Array<string | RegExp> = MASKS.STATE;

  taxForm: FormGroup;
  application: Application;
  w2Form: W2Form;
  address: FormGroup;
  employerAddress: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService ){
      this.application = this.currentApplicationService.getApplication();
      this.application.estimate = 5000;
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
        'field10': this.w2Form.field10
      });
    }

    changeEstimate(): void {
      if(this.currentApplicationService.getApplication()) {
        this.currentApplicationService.getApplication().estimate = this.taxForm.get('field2').value;
      }
    }

    createAddressGroup(address: MailingAddress): FormGroup {
      if (!address) address = new MailingAddress();
      return new FormGroup({
        'home1': new FormControl(address.home1, Validators.compose([Validators.required])),
        'home2': new FormControl(address.home2, Validators.compose([Validators.required])),
        'zip': new FormControl(address.zip, Validators.compose([Validators.required])),
        'city': new FormControl(address.city, Validators.compose([Validators.required])),
        'state': new FormControl(address.state, Validators.compose([Validators.required]))
      });
    }

    getW2(index: number, client: Client): W2Form {
      if (!this.application.w2Forms || this.application.w2Forms.length === 0) return new W2Form(client);
      if (!this.application.w2Forms[index]) return null;
      return this.application.w2Forms[index];
    }

    submitForm(fields: any):void {

    }

}
