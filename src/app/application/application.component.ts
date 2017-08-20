import { Component, OnInit } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { CurrentApplicationService } from './service/current-application.service';

@Component({
  selector: 'application',
  templateUrl: './templates/application.component.html',
  styleUrls: ['../tax-return/templates/tax-return.component.css']
})
export class ApplicationComponent {

  taxForm: FormGroup;
  client: Client;
  year: number;
  estimate: number;
  currentAgi: number;

  constructor(
    private _uiRouter: UIRouter,
    private formBuilder: FormBuilder,
    private currentApplicationService: CurrentApplicationService
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
    if (!this.currentApplicationService.getApplication()) {
      this._uiRouter.stateService.go('menu.landingPage');
    }else{
      this.client = this.currentApplicationService.getClient();
      this.year = this.currentApplicationService.getApplication().year;
      this.estimate = this.currentApplicationService.getApplication().estimate;
      this.currentAgi = this.currentApplicationService.getApplication().currentAgi;
    }
  }

  submitForm(fields: any):void {
    //Save intfo here
  }
}
