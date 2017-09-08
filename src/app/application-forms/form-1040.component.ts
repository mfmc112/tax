import { Component, OnInit } from  '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';

@Component({
  selector:'form-1040',
  templateUrl: './templates/form-1040.component.html'
})
export class Form1040Component implements OnInit {

  constructor(
    private _uiRouter: UIRouter,
  ) {}

  ngOnInit() {
    this._uiRouter.stateService.go('menu.application.form1040.page1');
  }

}
