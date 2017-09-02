import { Component, OnInit, DoCheck } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationRules } from '../validator/validator-rules.component';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { CurrentApplicationService } from './service/current-application.service';
import * as _ from 'lodash'

@Component({
  selector: 'application',
  templateUrl: './templates/application.component.html',
  styleUrls: ['./templates/application.component.css']
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
      if (_.isEmpty(this.currentAgi)) this.currentAgi = 0;
    }
  }

  ngDoCheck(): void {
    if (this.currentApplicationService.getApplication()) {
      this.currentApplicationService.calculate();
      this.estimate = this.currentApplicationService.getEstimate();
      this.currentAgi = this.currentApplicationService.getCurrentAGI();
    } else {
      this.estimate = 0;
      this.currentAgi = 0;
    }
  }

  submitForm(fields: any):void {
    //Save intfo here
  }
}
