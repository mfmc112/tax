import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { validationRules } from '../validator/validator-rules.component';
import { ClientApiService } from '../client/client-api.service';
import { ApplicationApiService } from '../application/api/application-api.service';
import { CommonService } from '../common.service';
import { Client } from '../common/client';
import { Application } from '../common/application';
import { User } from '../login/user';
import { ClientInformation } from '../common/client-information';

@Component({
  selector: 'new-client-modal',
  templateUrl: './templates/new-client.component.html'
})
export class NewClientComponent {
  // This makes the reference to my modal the child as String is the #modalName
  @ViewChild('newClientModal') modal: ModalComponent;
  clientForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private clientApi: ClientApiService,
    private applicationApi: ApplicationApiService,
    public toastr: ToastsManager, vcr: ViewContainerRef
  ){
    this.toastr.setRootViewContainerRef(vcr);

    this.clientForm = formBuilder.group({
      'firstName' : [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'middleName' : '',
      'lastName': [null, Validators.compose([Validators.required, Validators.maxLength(45)])],
      'returnYear': '2017',
      'ssnItin' : [null, Validators.compose([Validators.required, Validators.pattern(validationRules.SSN_REGEXP)])],
      'generateItin' : false
    });
  }

  submitForm(fields: any):void {
    let application: Application = this.createApplicationObject(fields);
    this.saveApplication(application);
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

  createApplicationObject(fields: any): Application {
    let application: Application = new Application();
    application.year = fields.returnYear;
    application.client = this.createClientObject(fields);
    application.clientInformation = this.createClientInfoObject(application.client);
    application.preparer = this.getPreparer()._id;
    return application;
  }

  open(): void { this.modal.open(); }

  close(): void { this.modal.close(); }

  getPreparer(): any { return this.commonService.getUser(); }

  isItin(value): boolean { return validationRules.ITIN_REGEXP.test(value); }

  saveApplication(application: Application) : void {
    let self = this;
    this.clientApi.findByFilter(application.client).subscribe(existingClient => {
      // If client Do not exists
      if (existingClient.clients.length === 0) {
        self.clientApi.insert(application.client).subscribe(client => {
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
    this.applicationApi.insert(application).subscribe((application) => {
      this.toastr.success('Application for ' + application.year + ' created successfully for client ' + application.client.firstName , 'Success!');
      this.close()
    });
  }
}
