import { Component, OnInit, DoCheck } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { Dependent } from '../common/';

@Component({
  selector:'dependents-form',
  templateUrl: './templates/dependents-form.component.html'
})
export class DependentsFormComponent implements OnInit, DoCheck {
  tab: number = 1;
  dependents: Dependent[];

  constructor(
    private _uiRouter: UIRouter,
    private currentApplicationService: CurrentApplicationService
  ) {}

  ngOnInit() {
    this.dependents = this.currentApplicationService.getDependents();
    let id = this.getDependentId();
    this._uiRouter.stateService.go('menu.application.dependentsForm.dependent', {id: id});
    if (!id || id === '0') this.selectTab(1);
    else this.selectTab(0);
  }

  ngDoCheck() {
    this.dependents = this.currentApplicationService.getDependents();
  }

  getDependentId(): string {
    let id = '0';
    if (this.dependents && this.dependents.length > 0) id = this.dependents[0]._id;
    return id;
  }

  selectTab(tab): void {
    this.tab = tab;
  }
}
