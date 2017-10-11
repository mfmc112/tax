import { Component, OnInit } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { Dependent } from '../common/';

@Component({
  selector:'dependents-form',
  templateUrl: './templates/dependents-form.component.html'
})
export class DependentsFormComponent implements OnInit {
  tab: number = 1;
  dependents: Dependent[];

  constructor(
    private _uiRouter: UIRouter,
    private currentApplicationService: CurrentApplicationService
  ) {}

  ngOnInit() {
    this.dependents = this.currentApplicationService.getDependents();
    this._uiRouter.stateService.go('menu.application.dependentsForm.dependent', {id:''});
  }

  selectTab(tab): void {
    this.tab = tab;
  }
}
