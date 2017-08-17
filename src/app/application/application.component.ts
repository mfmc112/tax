import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';
@Component({
  selector: 'application',
  templateUrl: './templates/application.component.html',
  styleUrls: ['../tax-return/templates/tax-return.component.css']

})
export class ApplicationComponent {
  client: Client;
  taxReturn: TaxReturn;
  taxForm: FormGroup;
  collapsedMenu: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private workingClientService: WorkingClientService,
    private workingTaxReturnService: WorkingTaxReturnService
   ) {
     this.taxForm = formBuilder.group({
       'firstName' : [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
       'middleName' : '',
       'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
       'suffixName': '',
       'returnYear': '2017',
       'ssnItin' : [null, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
       'generateItin' : false

     });
   }

  ngOnInit(): void {
    this.client = this.workingClientService.getClient();
    this.taxReturn = this.workingTaxReturnService.getTaxReturn();
  }

  submitForm(fields: any):void {
    //Save intfo here
  }
}
