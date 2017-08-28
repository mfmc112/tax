import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

/**
  * This is how to use it
  * <n-input class="col-sm-3" name="firstName" label="First Name" placeHolder="Client First Name" [mask]="initialMask" [formGroup]="taxForm"></n-input>
  */
@Component({
  selector: 'n-radio',
  inputs:['nName', 'nValue', 'nLabel', 'fGroup'],
  styleUrls: ['./templates/n-components.css'],
  template: `
      <div class="radio radio-primary" [formGroup]="fGroup">
        <input [attr.name]="nName" formControlName={{nName}} type="radio" [attr.id]="nName" [attr.value]="nValue">
        <label [attr.for]="nName">{{nLabel}}</label>
      </div>
  `
})
export class NRadioComponent {
  @Input('nName') nName: string;
  @Input('nValue') nValue: string;
  @Input('nLabel') nLabel: string;
  @Input('fGroup') fGroup: any;
}
