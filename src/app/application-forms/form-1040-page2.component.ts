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
      'box38': new FormControl({value: "0", disabled: true }),
      'box39a65OrOlderTaxpayer': new FormControl(false),
      'box39a65OrOlderSpouse': new FormControl(false),
      'box39aBlindTaxpayer': new FormControl(false),
      'box39aBlindSpouse': new FormControl(false),
      'box39aBoxesChecked': new FormControl({value: "0", disabled: true }),
      'box39b1': new FormControl(false),
      'box39b2': new FormControl(false),
      'box40': new FormControl({value: "0", disabled: true }),
      'box41': new FormControl({value: "0", disabled: true }),
      'box42': new FormControl({value: "0", disabled: true }),
      'box43': new FormControl({value: "0", disabled: true }),
      'irsScheduleQ': new FormControl(false),
      'divCapGains': new FormControl(false),
      'divCapGainsAmount': new FormControl({value: "0", disabled: true }),
      'taxWorksheet': new FormControl(false),
      'taxWorksheetAmount': new FormControl({value: "0", disabled: true }),
      'form8814': new FormControl(false),
      'form8814Amount': new FormControl({value: "0", disabled: true }),
      'form4972': new FormControl(false),
      'form4972Amount': new FormControl({value: "0", disabled: true }),
      'educationRecaptureAmount': new FormControl({value: "0", disabled: true }),
      'totalTax': new FormControl({value: "0", disabled: true }),
      'box45': new FormControl({value: "0", disabled: true }),
      'box46': new FormControl({value: "0", disabled: true }),
      'box47': new FormControl({value: "0", disabled: true })
    });
  }

  ngOnInit():void {
    this.boxChecked(null);
  }

  boxChecked(event): void {
    let count = 0;
    if (!!this.taxForm.get('box39a65OrOlderTaxpayer').value){ count++; }
    if (!!this.taxForm.get('box39a65OrOlderSpouse').value){ count++; }
    if (!!this.taxForm.get('box39aBlindTaxpayer').value){ count++; }
    if (!!this.taxForm.get('box39aBlindSpouse').value){ count++; }
    this.taxForm.get('box39aBoxesChecked').patchValue(count);
  }

  submitForm(fields: any):void { }


}
