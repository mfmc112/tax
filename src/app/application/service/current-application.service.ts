import { Injectable } from '@angular/core';
import { Application, Client, User, PersonalInformation } from '../../common/';
import * as _ from 'lodash';
@Injectable()
export class CurrentApplicationService {

  private application: Application;

  getApplication(): Application {
    return this.application;
  }

  setApplication(application: Application): void {
    this.application = application;
  }

  getClient(): Client {
    return this.application.client;
  }

  getPreparer(): User {
    return this.application.preparer;
  }

  getEstimate(): number {
    return (this.application && this.application.estimate) ? Number(this.application.estimate) : 0;
  }

  getCurrentAGI(): number {
    return (this.application && this.application.currentAgi) ? Number(this.application.currentAgi) : 0;
  }

  setPersonalInformation(pi: PersonalInformation): void {
    this.application.clientInformation.personalInformation = pi;
  }

  calculate(): void {
    this.application.estimate = 0;
    this.application.currentAgi = 0;
    _.each(this.application.w2Forms, form => {
      if (!_.isEmpty(form.field1)) {
        this.application.currentAgi = this.getCurrentAGI() + Number(form.field1);
        let percent = (form.field1*0.10);
        if (_.isEmpty(form.field2)) form.field2 = 0;
        this.application.estimate += this.getEstimate() + ((form.field2 > percent) ? (Number(form.field2)-percent) : (Number(form.field2)-percent));
      }
      if (!_.isEmpty(form.field3)) {
        this.application.currentAgi = this.getCurrentAGI() + Number(form.field3);
        let percent = (form.field3*0.062);
        if (_.isEmpty(form.field4)) form.field4 = 0;
        this.application.estimate += this.getEstimate() + ((form.field4 > percent) ? (Number(form.field4)-percent) : (Number(form.field4)-percent));
      }
      if (!_.isEmpty(form.field5)) {
        this.application.currentAgi = this.getCurrentAGI() + Number(form.field5);
        let percent = (form.field5*0.0145);
        if (_.isEmpty(form.field6)) form.field6 = 0;
        this.application.estimate += this.getEstimate() + ((form.field6 > percent) ? (Number(form.field6)-percent) : (Number(form.field6)-percent));
      }
    });
  }

}
