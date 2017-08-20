import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { NewClientComponent } from './new-client.component';
import { ApplicationListComponent } from './application-list.component';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'landing-page',
  styleUrls: ['./templates/landing-page.component.css'],
  templateUrl: './templates/landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  @ViewChild(NewClientComponent) newClientComponent: NewClientComponent;
  @ViewChild(ApplicationListComponent) applicationListComponent: ApplicationListComponent;
  @Input() name: string;
  @Input() year: number;
  user: User;

  constructor (
    private _uiRouter: UIRouter,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    if (!this.commonService.getUser()) {
      this._uiRouter.stateService.go('login');
    }else{
      this.user = this.commonService.getUser();
    }
  }

  close(): void {
    this.newClientComponent.close();
  }

  open(): void {
    this.newClientComponent.open();
  }

  findClients(): void {
    let filter: any = {};
    filter.year = this.year;
    if (this.name) {
      filter.client = {};
      filter.client.firstName =  this.name;
    }

    this.applicationListComponent.findApplications( filter );
  }
}
