import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'n-checkbox',
  inputs:['nName', 'nValue', 'nLabel', 'nLabelUp', 'nClass', 'fGroup', 'controlForm'],
  styleUrls: ['./templates/n-components.css'],
  template: `
      <label *ngIf="nLabelUp" [attr.for]="nName">{{nLabel}}</label>
      <div class="checkbox checkbox-primary {{nClass}}" [formGroup]="fGroup">
        <input type="checkbox" [attr.name]="nName" formControlName={{controlForm}} [attr.id]="nName">
        <label [attr.for]="nName" [attr.class]="nLabel===' '?'top': 'normal'">{{!nLabelUp ? nLabel : ' '}}</label>
      </div>
  `
})
export class NCheckboxComponent implements OnInit {
  @Input('nName') nName: string;
  @Input('nValue') nValue: string;
  @Input('nLabel') nLabel: string;
  @Input('nClass') nClass: string;
  @Input('fGroup') fGroup: any;
  @Input('nLabelUp') nLabelUp: boolean;
  @Input('controlForm') controlForm: string;

  ngOnInit(): void {
    if (!this.controlForm) this.controlForm = this.nName;
  }
}
