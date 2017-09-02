import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'n-w2-field12',
  inputs:['fGroup', 'nField'],
  styleUrls: ['./templates/n-components.css'],
  template: `
    <div class="row" style="margin-bottom:10px;">
      <div class="col-sm-1">{{nField}}</div>
      <div class="col-sm-4" [formGroup]="fGroup">
        <select formControlName='{{"field"+nField+"1"}}' id="field{{nField}}1" class="form-control">
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="DD">DD</option>
          <option value="EE">EE</option>
        </select>
      </div>
      <div class="col-sm-7" [formGroup]="fGroup">
          <input formControlName='{{"field"+nField+"2"}}' type="text" id="field{{nField}}2" class="form-control"
          [textMask]="{mask: numberMask, guide:false}">
      </div>
    </div>
  `
})
export class NW2Field12Component {
  @Input('nField') nField: string;
  @Input('fGroup') fGroup: any;

  numberMask = createNumberMask({
    prefix: '$',
    suffix: ''
  })

}
