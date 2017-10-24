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
  numberMask = createNumberMask({ prefix: '$' });
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
      'box47': new FormControl({value: "0", disabled: true }),
      'box48': new FormControl({value: "0", disabled: true }),
      'box49': new FormControl({value: "0", disabled: true }),
      'box50': new FormControl({value: "0", disabled: true }),
      'box51': new FormControl({value: "0", disabled: true }),
      'box52': new FormControl({value: "0", disabled: true }),
      'box53': new FormControl({value: "0", disabled: true }),
      'box54': new FormControl({value: "0", disabled: true }),
      'extraFormNumber': new FormControl(""),
      'form3800': new FormControl(false),
      'form8801': new FormControl(false),
      'extraForm': new FormControl(false),
      'box55': new FormControl({value: "0", disabled: true }),
      'box56': new FormControl({value: "0", disabled: true }),
      'box57': new FormControl({value: "0", disabled: true }),
      'form4038': new FormControl(false),
      'form4361': new FormControl(false),
      'exemptNotary': new FormControl(false),
      'box58': new FormControl({value: "0", disabled: true }),
      'form4137': new FormControl(false),
      'form8919': new FormControl(false),
      'rtta': new FormControl(false),
      'box59': new FormControl({value: "0", disabled: true }),
      'box60a': new FormControl({value: "0", disabled: true }),
      'box60b': new FormControl({value: "0", disabled: true }),
      'firstTimeBuyerRepayment': new FormControl({value: "0", disabled: false }),
      'box61': new FormControl({value: "0", disabled: true }),
      'fullYearCoverage': new FormControl(false),
      'box62': new FormControl({value: "0", disabled: true }),
      'form8959': new FormControl(false),
      'form8960': new FormControl(false),
      'otherForm': new FormControl(false),
      'box63': new FormControl({value: "0", disabled: true }),
      'box64': new FormControl({value: "0", disabled: true }),
      'withholdingFrom1099': new FormControl(""),
      'withholdingFrom1099Amount': new FormControl({value: "0", disabled: true }),
      'box65': new FormControl({value: "0", disabled: true }),
      'exSpouseSSN': new FormControl({value: "", disabled: false }),
      'spouseSSNCheck': new FormControl(false),
      'box66a': new FormControl({value: "0", disabled: true }),
      'box66b': new FormControl({value: "0", disabled: true }),
      'box67': new FormControl({value: "0", disabled: true }),
      'box68': new FormControl({value: "0", disabled: true }),
      'box69': new FormControl({value: "0", disabled: true }),
      'box70': new FormControl({value: "0", disabled: false }),
      'box71': new FormControl({value: "0", disabled: true }),
      'box72': new FormControl({value: "0", disabled: true }),
      'paymentsExtraFormNumber': new FormControl(""),
      'form2439': new FormControl(false),
      'reserved': new FormControl(false),
      'form8885': new FormControl(false),
      'paymentsExtraForm': new FormControl(false),
      'irc': new FormControl({value: "0", disabled: true }),
      'otherPaymentsTotal': new FormControl({value: "0", disabled: false }),
      'paymentsTotal': new FormControl({value: "0", disabled: false }),

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
