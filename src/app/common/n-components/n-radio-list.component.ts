import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
  * This is how to use it
  * <n-input class="col-sm-3" name="firstName" label="First Name" placeHolder="Client First Name" [mask]="initialMask" [formGroup]="taxForm"></n-input>
  */
@Component({
  selector: 'n-radio-list',
  inputs:['nName', 'labelValue', 'fGroup'],
  styleUrls: ['./templates/n-components.css'],
  template: `
  <div class="row" *ngFor="let o of labelValue; let i = index">
    <div class="radio radio-primary" [formGroup]="fGroup">
      <input [attr.name]="nName" formControlName={{nName}} type="radio" [attr.id]="nName + i" [attr.value]="o.value">
      <label [attr.for]="nName + i">{{o.label}}</label>
    </div>
  </div>
  `
})
export class NRadioListComponent {
  @Input('labelValue') labelValue: any;
  @Input('nName') nName: any;
  @Input('fGroup') fGroup: any;
}
