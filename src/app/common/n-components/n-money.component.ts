import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'n-money',
  inputs:['name', 'label', 'placeHolder', 'fGroup', 'addMargin', 'nRight'],
  styleUrls: ['./templates/n-components.css'],
  template: `
    <div class="form-group" [formGroup]="fGroup">
        <label *ngIf="label" for={{name}} [attr.class]="(addMargin)?'add-margin':null">{{label}}</label>
        <div class="input-group">
          <input formControlName={{name}} type="text" id="{{name}}"
            class="form-control numbers"
            [class.text-right]="nRight !== undefined"
            [attr.placeholder]="placeHolder ? placeHolder : null"
            [textMask]="{mask: numberMask, guide:false}"
          >
          <span class="input-group-addon decimal"
            [class.decimal-disabled]="fGroup.get(name).disabled"
            [class.decimal-enabled]="!fGroup.get(name).disabled"
            >.00</span>
        </div>
    </div>
  `
})
export class NMoneyComponent {
  @Input('placeHolder') placeHolder: string;
  @Input('name') name: string;
  @Input('label') label: string;
  @Input('nRight') nRight: any;
  @Input('addMargin') addMargin: any;
  @Input('fGroup') fGroup: any;

  numberMask = createNumberMask({prefix: '$'});

}
