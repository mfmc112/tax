import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'n-w2-field12',
  inputs:['fGroup', 'nField', 'nOptions', 'nTargetForm'],
  styleUrls: ['../../application/templates/application.component.css'],
  template: `
    <div class="row" style="margin-bottom:10px;">
      <div class="col-sm-1">{{nField}}</div>
      <div class="col-sm-4" [formGroup]="fGroup">
        <input formControlName='{{"field"+nField+"1"}}' type="text" id="field{{nField}}1" class="form-control d-inline-block" style="width: 90%;position: absolute;">
        <div class="d-inline-block" style="position:absolute;right:0px;">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
          <div class="dropdown-menu dropdown-menu-right" style="z-index:99999999">
            <a class="dropdown-item" *ngFor="let o of nOptions" (click)="selectField12(nField, o.value)">{{o.name}}</a>
          </div>
        </div>
      </div>
      <div class="col-sm-7" [formGroup]="fGroup">
          <input formControlName='{{"field"+nField+"2"}}' type="text" id="field{{nField}}2" class="form-control text-right"
          [textMask]="{mask: numberMask, guide:false}">
      </div>
    </div>
  `
})
export class NW2Field12Component {
  @Input('nField') nField: string;
  @Input('fGroup') fGroup: any;
  @Input('nOptions') nOptions: any;
  @Input('nTargetForm') nTargetForm: any;

  numberMask = createNumberMask({
    prefix: '$',
    suffix: '.00'
  });

  selectField12(nField, value) {
    this.nTargetForm.get('field' + nField + '1').setValue(value)
  }
}
