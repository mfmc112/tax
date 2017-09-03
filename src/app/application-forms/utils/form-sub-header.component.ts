import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-sub-header',
  inputs:['nTitle'],
  template: `
    <p class="lead">{{nTitle}}</p>
    <hr class="sub-header-hr">
  `
})
export class FormSubHeaderComponent {
  @Input('nTitle') nTitle: string;
}