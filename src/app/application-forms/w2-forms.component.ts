import { Component, OnInit, DoCheck } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { W2Form } from '../common/';

@Component({
  selector:'w2-form',
  templateUrl: './templates/w2-forms.component.html'
})
export class W2FormsComponent implements OnInit, DoCheck {
  tab: number = 1;
  year: number;
  w2Forms: W2Form[];

  constructor(
    private _uiRouter: UIRouter,
    private currentApplicationService: CurrentApplicationService
  ) {}

  ngOnInit() {
    this.year = this.currentApplicationService.getApplication().year;
    this.w2Forms = this.currentApplicationService.getW2Forms();
    let id = this.getW2Id();
    this._uiRouter.stateService.go('menu.application.w2Forms.w2', {id: id});
    if (!id || id === '0') this.selectTab(1);
    else this.selectTab(0);
  }

  ngDoCheck() {
    this.w2Forms = this.currentApplicationService.getW2Forms();
  }

  getW2Id(): string {
    let id = '0';
    if (this.w2Forms && this.w2Forms.length > 0) id = this.w2Forms[0]._id;
    return id;
  }

  selectTab(tab): void {
    this.tab = tab;
  }
}
