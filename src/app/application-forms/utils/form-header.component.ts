import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-header',
  inputs:['nTitle', 'nSubTitle', 'nYear'],
  template: `
    <div class="page-header" style="background-color:#cccccc; margin-bottom:20px; line-height:1; color:#004d66">
      <div class="d-inline-block" style="font-size:3.9rem;font-weight:700;">US</div>
      <div class="d-inline-block">
          <h4>{{nTitle}}
          <small *ngIf="nSubTitle"><br><small>{{nSubTitle}}</small></small>
          </h4>
      </div>
      <div class="d-inline-block float-right" style="font-size:3.9rem;font-weight:700;margin-right:10px">
        {{nYear}}
      </div>
    </div>
  `
})
export class FormHeaderComponent {
  @Input('nTitle') nTitle: string;
  @Input('nSubTitle') nSubTitle: string;
  @Input('nYear') nYear: number;

  constructor(){
    if (!this.nYear) this.nYear = new Date().getFullYear();
  }
}
