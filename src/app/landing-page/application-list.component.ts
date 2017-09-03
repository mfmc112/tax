import { Component } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { Client } from '../common/client';
import { Application } from '../common/application';
import { TaxReturn } from '../common/tax-return';
import { CurrentApplicationService } from '../application/service/current-application.service';
import { ApplicationApiService } from '../application/api/application-api.service';

@Component({
  selector:'application-list',
  styleUrls: ['./templates/application-list.component.css'],
  templateUrl: './templates/application-list.component.html'
})
export class ApplicationListComponent {

  public applicationList: Application[];

  constructor(
    private _uiRouter: UIRouter,
    private applicationApi: ApplicationApiService,
    private currentApplicationService: CurrentApplicationService
   ) {
   this.findApplications({});
 }

  openApplication(id):void {
    this.applicationApi.findById(id).subscribe(data => {
      this.currentApplicationService.setApplication(data);
      this._uiRouter.stateService.go('menu.application.personalInfo');
    });
  }

  findApplications(filter: object): void {
    if (!filter) filter = {};
    this.applicationApi.findByFilter(filter).subscribe(data => this.applicationList = data.applications);
  }

}
