import { Component, Input } from '@angular/core';

@Component({
  selector: 'n-form-bold-box',
  inputs:['section', 'text', 'boldText', 'italicText'],
  styleUrls: ['./templates/n-components.css'],
  template: `
  <span class="bold-number"><b>{{section}}</b></span>
  <span class="box-text"><b *ngIf="boldText">{{boldText}}</b><i *ngIf="italicText">{{italicText}}</i>{{text}}<b *ngIf="boldTextAfter">{{boldTextAfter}}</b></span>
  `
})
export class NFormBoldBoxComponent {
  @Input('section') section: string;
  @Input('text') text: string;
  @Input('boldText') boldText: string;
  @Input('italicText') italicText: string
  @Input('boldTextAfter') boldTextAfter: string;
}
