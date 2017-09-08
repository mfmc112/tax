import { Component, OnInit, ViewChild, ViewContainerRef } from  '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ApplicationComponent } from '../application/application.component';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { validationRules } from '../validator/validator-rules.component';
import { MASKS } from '../enum/masks.enum';
import { PersonalInfoFormComponent } from './personal-info-form.component';
import { Application, PersonalInformation, FilingInformation, Dependent, W2Form, MailingAddress, Client, Utils } from '../common/';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector:'form-1040-page2',
  templateUrl: './templates/form-1040-page2.component.html'
})
export class Form1040Page2Component implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  zipMask:  Array<string | RegExp> = MASKS.ZIP;
  numberMask = createNumberMask({ prefix: '$', suffix: '' });
  statusRadio: any;
  application: Application;
  pi: PersonalInformation;
  fi: FilingInformation;
  taxForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private currentApplicationService: CurrentApplicationService
  ){
    this.toastr.setRootViewContainerRef(vcr);
    this.application = this.currentApplicationService.getApplication();
    this.pi = this.application.clientInformation.personalInformation;
    this.fi = this.application.clientInformation.filingInformation;

    this.taxForm = formBuilder.group({
      'firstName': [{value: this.pi.taxPayer.firstName, disabled: true}]
    });
  }

  ngOnInit():void {

  }

  submitForm(fields: any):void { }

}
