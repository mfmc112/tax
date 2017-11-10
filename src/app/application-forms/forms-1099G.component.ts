import { Component, OnInit, DoCheck } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { Form1099G } from '../common/';

@Component({
  selector:'form-1099g',
  templateUrl: './templates/forms-1099g.component.html'
})
export class Forms1099GComponent implements OnInit, DoCheck {
  tab: number = 1;
  year: number;
  forms1099G: Form1099G[];

  constructor(
    private _uiRouter: UIRouter,
    private currentApplicationService: CurrentApplicationService
  ) {}

  ngOnInit() {
    this.year = this.currentApplicationService.getApplication().year;
    this.forms1099G = this.currentApplicationService.getForms1099G();
    let id = this.get1099GId();
    this._uiRouter.stateService.go('menu.application.forms1099g.form1099g', {id: id});
    if (!id || id === '0') this.selectTab(1);
    else this.selectTab(0);
  }

  ngDoCheck() {
    this.forms1099G = this.currentApplicationService.getForms1099G();
  }

  get1099GId(): string {
    let id = '0';
    if (this.forms1099G && this.forms1099G.length > 0) id = this.forms1099G[0]._id;
    return id;
  }

  selectTab(tab): void {
    this.tab = tab;
  }
}
