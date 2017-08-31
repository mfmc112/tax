import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

/**
  * This is how to use it
  * <n-input class="col-sm-3" name="firstName" label="First Name" placeHolder="Client First Name" [mask]="initialMask" [formGroup]="taxForm"></n-input>
  */
@Component({
  selector: 'n-input',
  inputs:['mask', 'name', 'label', 'placeHolder', 'fGroup', 'addMargin', 'nChange', 'nKeyup'],
  styleUrls: ['./templates/n-components.css'],
  template: `
    <div class="form-group" [formGroup]="fGroup">
        <label *ngIf="label" for={{name}} [attr.class]="(addMargin)?'add-margin':null">{{label}}</label>
        <input formControlName={{name}} type="text" id="{{name}}" class="form-control"
        [attr.placeholder]="placeHolder ? placeHolder : null"
        [textMask]="{mask: mask, guide:false}"
        (change)="nChange"
        (keyup)="nKeyup">
    </div>
  `
})
export class NInputComponent {
  @Input('placeHolder') placeHolder: string;
  @Input('name') name: string;
  @Input('label') label: string;
  @Input('mask') mask: any;
  @Input('addMargin') addMargin: any;
  @Input('fGroup') fGroup: any;
  @Input('nChange') nChange: any;
  @Input('nKeyup') nKeyup: any;

  constructor() {
    if (!this.mask) this.mask = false;
  }

}
