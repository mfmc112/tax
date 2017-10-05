import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { CurrentApplicationService } from './service/current-application.service';
import * as _ from 'lodash';

@Component({
  selector: 'add-form-modal',
  templateUrl: './templates/add-form.component.html',
  styleUrls: ['./templates/application.component.css']
})

export class AddFormComponent implements OnInit {
  @ViewChild('addFormModal') modal: ModalComponent;
  forms: Array<any> = [];

  constructor( private currentApplicationService: CurrentApplicationService ) {
  }

  ngOnInit() {
    this.forms = [
      {name: "Consent of Disclose", value: "Consent of disclose"},
      {name: "Dependents", value: "Dependents"},
      {name: "Form 8879", value: "8879", info: "IRS e-file signature authorization"},
      {name: "W2 Form", value: "W2"},
      {name: "Worksheet 8", value: "wkt8"}
    ];
  }

  addForm(form) {
    if (form.value === "W2") {
      this.currentApplicationService.addW2Form();
    }

    this.currentApplicationService.updateApplication().subscribe(
      result => {
        this.currentApplicationService.retrieveApplication(result._id).subscribe(
          application => {
            this.currentApplicationService.setW2Forms(application.w2Forms);
            this.close();
          },err => {
            console.log('Error retrieving application after adding a new form');
          }
        );
      },err => {
        console.log('Error updating application while adding a new form');
      }
    );
  }

  // removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }

  open(): void { this.modal.open(); }

  close(): void {
    this.modal.close();
  }
}
