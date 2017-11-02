import { Component, OnInit, DoCheck } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { W2GForm } from '../common/';

@Component({
  selector:'w2g-form',
  templateUrl: './templates/w2g-forms.component.html'
})
export class W2GFormsComponent implements OnInit, DoCheck {
  tab: number = 1;
  year: number;
  w2GForms: W2GForm[];

  constructor(
    private _uiRouter: UIRouter,
    private currentApplicationService: CurrentApplicationService
  ) {}

  ngOnInit() {
    this.year = this.currentApplicationService.getApplication().year;
    this.w2GForms = this.currentApplicationService.getW2GForms();
    let id = this.getW2Id();
    this._uiRouter.stateService.go('menu.application.w2gForms.w2g', {id: id});
    if (!id || id === '0') this.selectTab(1);
    else this.selectTab(0);
  }

  ngDoCheck() {
    this.w2GForms = this.currentApplicationService.getW2GForms();
  }

  getW2Id(): string {
    let id = '0';
    if (this.w2GForms && this.w2GForms.length > 0) id = this.w2GForms[0]._id;
    return id;
  }

  selectTab(tab): void {
    this.tab = tab;
  }
}
