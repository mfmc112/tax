import { Component, Input } from '@angular/core';

@Component({
  selector: 'n-form-bold-box',
  inputs:['section', 'text', 'boldText', 'italicText'],
  styleUrls: ['./templates/n-components.css'],
  template: `
  <span class="bold-number"><b>{{section}}</b></span>
  <span class="box-text"><b>{{boldText}}</b><i>{{italicText}}</i>{{text}}</span>
  `
})
export class NFormBoldBoxComponent {
  @Input('section') section: string;
  @Input('text') text: string;
  @Input('boldText') boldText: string;
  @Input('italicText') italicText: string
}
