import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { ApplicationComponent } from '../application/application.component';
import { ClientApiService } from '../client/client-api.service';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';

@Component({
  selector: 'personal-info-form',
  templateUrl: './templates/personal-info-form.component.html'
})
export class PersonalInfoFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  taxForm: FormGroup;
  client: Client;
  taxReturn: TaxReturn;

  constructor(
    private formBuilder: FormBuilder,
    private workingClientService: WorkingClientService,
    private workingTaxReturnService: WorkingTaxReturnService ){

    this.taxForm = formBuilder.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'middleName' : '',
      'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'suffixName': '',
      'ssnItin' : [null, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])]
    });
  }

  ngOnInit(): void {
    let tr: TaxReturn = new TaxReturn();
    tr.estimate = 1000;
    tr.currentAGI = 30000;
    this.workingTaxReturnService.setTaxReturn(tr);
    this.client = this.workingClientService.getClient();
    this.taxReturn = this.workingTaxReturnService.getTaxReturn();

  }

  submitForm(fields: any):void {

  }

}
