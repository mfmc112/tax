import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

/**
  * This is how to use it
  * <n-input class="col-sm-3" name="firstName" label="First Name" placeHolder="Client First Name" [mask]="initialMask" [formGroup]="taxForm"></n-input>
  */
@Component({
  selector: 'n-textarea',
  inputs:['name', 'label', 'placeHolder', 'nRows', 'fGroup'],
  styleUrls: ['./templates/n-components.css'],
  template: `
    <div class="form-group" [formGroup]="fGroup">
        <label *ngIf="label" for={{name}}>{{label}}</label>
        <textarea formControlName={{name}} type="text" id="{{name}}" class="form-control"
          [attr.rows]="nRows ? nRows : null"
          [attr.placeholder]="placeHolder ? placeHolder : null">
        </textarea>
    </div>
  `
})
export class NTextareaComponent {
  @Input('placeHolder') placeHolder: string;
  @Input('name') name: string;
  @Input('label') label: string;
  @Input('nRows') nRows: number;
  @Input('fGroup') fGroup: any;
  @Input('nChange') nChange: any;
  @Input('nKeyup') nKeyup: any;
}
