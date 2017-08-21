import { Component, OnInit, DoCheck } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'menu-component',
  templateUrl: './templates/menu-component.html',
  styleUrls: ['./templates/menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  user: User;

  constructor (
    private _uiRouter: UIRouter,
    private commonService: CommonService ) {}

  ngOnInit(): void {
    if (!this.commonService.getUser()) {
      this._uiRouter.stateService.go('login');
    } else {
      this.user = this.commonService.getUser();
      this._uiRouter.stateService.go('menu.landingPage');

    }
  }

  // This ebables two way binding so when user changes into commonService it will get it
  ngDoCheck() {
    this.user = this.commonService.getUser();
  }
}
