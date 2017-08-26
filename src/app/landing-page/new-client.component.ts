import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UIRouter } from '@uirouter/angular';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { validationRules } from '../validator/validator-rules.component';
import { STATUSES } from '../enum/statuses.enum';
import { MASKS } from '../enum/masks.enum';

import { CurrentApplicationService } from '../application/service/current-application.service';
import { ApplicationApiService } from '../application/api/application-api.service';
import { ClientApiService } from '../client/client-api.service';
import { ClientInformation } from '../common/client-information';
import { CommonService } from '../common.service';
import { Application } from '../common/application';
import { Client } from '../common/client';
import { User } from '../login/user';
import * as _ from "lodash";

@Component({
  selector: 'new-client-modal',
  templateUrl: './templates/new-client.component.html'
})
export class NewClientComponent {
  // This makes the reference to my modal the child as String is the #modalName
  @ViewChild('newClientModal') modal: ModalComponent;
  clientForm: FormGroup;
  ssnMask: Array<string | RegExp> = MASKS.SSN;
  middleMask: Array<string | RegExp> = MASKS.INITIAL;
  application: Application;
  applicationId: string;

  constructor(
    private formBuilder: FormBuilder,
    private _uiRouter: UIRouter,
    private commonService: CommonService,
    private clientApi: ClientApiService,
    private applicationApi: ApplicationApiService,
    private currentApplicationService: CurrentApplicationService,
    public toastr: ToastsManager, vcr: ViewContainerRef
  ){
    this.toastr.setRootViewContainerRef(vcr);

    this.clientForm = formBuilder.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])],
      'middleName' : [null, Validators.compose([Validators.maxLength(1), Validators.pattern(validationRules.STRING)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(45), Validators.pattern(validationRules.STRING)])],
      'returnYear': '2017',
      'ssnItin' : [null, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
      'generateItin' : false
    });
  }

  submitForm(fields: any):void {
    let application: Application = this.createApplicationObject(fields);
    this.saveApplication(application);
  }

  createApplicationObject(fields: any): Application {
    let application: Application = new Application();
    application.year = fields.returnYear;
    application.status = STATUSES.CREATED;
    application.estimate = 0;
    application.currentAgi = 0;
    application.client = this.createClientObject(fields);
    application.clientInformation = this.createClientInfoObject(application.client);
    application.preparer = this.getPreparer()._id;
    return application;
  }

  createClientObject(fields: any): Client {
    let client: Client = new Client({});
    if (fields.ssnItin && this.isItin(fields.ssnItin)) client.setITIN(fields.ssnItin);
    else client.setSSN(fields.ssnItin);
    client.firstName = fields.firstName;
    client.middleName = fields.middleName;
    client.lastName = fields.lastName;
    return client;
  }

  createClientInfoObject(client: Client): ClientInformation {
    let clientInfo = new ClientInformation(client);
    return clientInfo;
  }

  cloneApplication(application: Application): void {
    this.application = _.cloneDeep(application);
    this.application.preparer = this.getPreparer();
  }

  saveApplication(application: Application): void {
    let self = this;
    this.clientApi.findByFilter({ssn:application.client.ssn}).subscribe(existingClient => {
      // If client Do not exists
      if (existingClient.clients.length === 0) {
        this.clientApi.insert(application.client).subscribe(client => {
          application.client = client._id;
          self.createApplication(application);
        });
      } else {
        application.client = existingClient.clients[0]._id;
        self.createApplication(application);
      }
    });
  }

  createApplication(application: Application): void {
    let self = this;
    this.applicationApi.insert(application).subscribe((result) => {
      this.cloneApplication(application);
      this.applicationId = result._id;
      this.close();
    },
    error => {
      if (error.status === 409){
        this.toastr.warning('There is already an application for ' + application.year + ' with this SSN', 'Warning!');
      }
    });
  }

  closeCallBack(application: Application): void {
    // Dont need to add Successful message since it is opening the application
    // this.toastr.success('Application for ' + application.year + ' created successfully for client ' + name, 'Success!');
    this.applicationApi.findById(this.applicationId).subscribe(data => {
      this.currentApplicationService.setApplication(data);
      this._uiRouter.stateService.go('^.application.personalInfo');
    }, error => {
      this.toastr.warning('Could not load the application.',' Try to refresh the list and load it from there', 'Warning!');
    });
  }

  clearForm() : void {
    this.clientForm.reset();
  }

  open(): void { this.modal.open(); }

  close(): void {
    this.clearForm();
    this.modal.close();
  }

  getPreparer(): any { return this.commonService.getUser(); }

  isItin(value): boolean { return validationRules.ITIN_REGEXP.test(value); }

}
