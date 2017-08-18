import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { validationRules } from '../validator/validator-rules.component';
import { ClientApiService } from '../client/client-api.service';
import { Client } from '../common/client';

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
    private clientApiService: ClientApiService,
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
    let client: Client = new Client();
    if (fields.ssnItin && validationRules.ITIN_REGEXP.test(fields.ssnItin)) {
      client.setITIN(fields.ssnItin);
    } else {
      client.setSSN(fields.ssnItin);
    }
    client.firstName = fields.firstName;
    client.middleName = fields.middleName;
    client.lastName = fields.lastName;

    this.addClient(client);
  }

  open(): void {
    this.modal.open();
  }

  close(): void {
    this.modal.close();
  }

  addClient(client: Client) : void {
    this.clientApiService.insert(client).subscribe((data) => {
      this.toastr.success('Client added successfully', 'Success!');
      this.close()
    });
  }

}
