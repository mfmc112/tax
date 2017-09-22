import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector: 'add-form-modal',
  templateUrl: './templates/add-form.component.html',
  styleUrls: ['./templates/application.component.css']
})

export class AddFormComponent implements OnInit {
  @ViewChild('addFormModal') modal: ModalComponent;
  droppedForms: Array<any> = [];
  forms: Array<any> = [];

  ngOnInit() {
    this.forms = [
      {name: "W2 Form", value: "W2"},
      {name: "1040 Form", value: "1040"},
      {name: "Dependents", value: "Dependents"}
    ];
  }

  onFormDrop(e: any) {
      this.droppedForms.push(e.dragData);
  }

  deleteForm(form: any) {
    this.removeItem(form, this.droppedForms);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  open(): void { this.modal.open(); }

  close(): void {
    this.modal.close();
  }
}
