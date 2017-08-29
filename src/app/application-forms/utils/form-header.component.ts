import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-header',
  inputs:['nTitle', 'nSubTitle'],
  template: `
    <div class="page-header" style="background-color:#cccccc">
        <h1>US<small><small> {{nTitle}} <small *ngIf="nSubTitle"><small>{{nSubTitle}}</small></small></small></small></h1>
    </div>
  `
})
export class FormHeaderComponent {
  @Input('nTitle') nTitle: string;
  @Input('nSubTitle') nSubTitle: string;
}
