import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'n-checkbox',
  inputs:['nName', 'nValue', 'nLabel', 'nClass', 'fGroup', 'controlForm'],
  styleUrls: ['./templates/n-components.css'],
  template: `
      <div class="checkbox checkbox-primary {{nClass}}" [formGroup]="fGroup">
        <input  type="checkbox" [attr.name]="nName" formControlName={{controlForm}} [attr.id]="nName" >
        <label [attr.for]="nName">{{nLabel}}</label>
      </div>
  `
})
export class NCheckboxComponent implements OnInit {
  @Input('nName') nName: string;
  @Input('nValue') nValue: string;
  @Input('nLabel') nLabel: string;
  @Input('nClass') nClass: string;
  @Input('fGroup') fGroup: any;
  @Input('controlForm') controlForm: string;

  ngOnInit(): void {
    if (!this.controlForm) this.controlForm = this.nName;
  }
}
