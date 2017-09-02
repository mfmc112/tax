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

  calculateBox2(amount: number): number {
    let box2 = 0;
    if (amount) box2 = Math.round(amount * 0.10);
    return box2;
  }

  calculateBox4(amount: number): number {
    let box4 = 0;
    if (amount) box4 = Math.round(amount * 0.062);
    return box4;
  }

  calculateBox6(amount: number): number {
    let box6 = 0;
    if (amount) box6 = Math.round(amount * 0.0145);
    return box6;
  }

  calculate(): void {
    this.application.estimate = 0;
    this.application.currentAgi = 0;
    _.each(this.application.w2Forms, form => {
      if (!_.isEmpty(form.field1) || form.field1 >= 0) {
        this.application.currentAgi = this.getCurrentAGI() + Number(form.field1);
        let estimated = this.calculateBox2(form.field1);
        let paid = Number(form.field2);
        this.addToEstimate(estimated, paid);
      }
      if (!_.isEmpty(form.field3) || form.field3 >= 0) {
        let estimated = this.calculateBox4(form.field3);
        let paid = Number(form.field4);
        this.addToEstimate(estimated, paid);
      }
      if (!_.isEmpty(form.field5) || form.field5 >= 0) {
        let estimated = this.calculateBox6(form.field5);
        let paid = Number(form.field6);
        this.addToEstimate(estimated, paid);
      }
    });
  }

  addToEstimate(estimated: number, paid: number): void {
    if (!_.isNumber(paid)) paid = 0;
    this.application.estimate += Math.round(paid-estimated);
  }

}
