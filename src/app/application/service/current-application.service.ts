import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../api/application-api.service';
import { Application, Client, User, ClientInformation, PersonalInformation, FilingInformation, BasicInformation, W2Form } from '../../common/';
import * as _ from 'lodash';

@Injectable()
export class CurrentApplicationService {

  private application: Application;

  constructor( private applicationApiService: ApplicationApiService ) {  }

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

  retrieveApplication(id: string): any {
    return this.applicationApiService.findById(id);
  }

  updateApplication(): any {
    return this.applicationApiService.update(this.application);
  }

  setPersonalInformation(pi: PersonalInformation): void {
    this.application.clientInformation.personalInformation = pi;
  }

  getPersonalInformation(): PersonalInformation {
    if (!this.application.clientInformation) {
      this.application.clientInformation = new ClientInformation(this.getClient());
    }

    if (!this.application.clientInformation.personalInformation) {
      this.application.clientInformation.personalInformation = new PersonalInformation(this.getClient());
    }

    if (!this.application.clientInformation.personalInformation.taxPayer) {
      this.application.clientInformation.personalInformation.taxPayer = new BasicInformation();
      this.application.clientInformation.personalInformation.taxPayer.firstName = this.getClient().firstName;
      this.application.clientInformation.personalInformation.taxPayer.initial = this.getClient().middleName;
      this.application.clientInformation.personalInformation.taxPayer.lastName = this.getClient().lastName;
      this.application.clientInformation.personalInformation.taxPayer.ssn = this.getClient().ssn;
    }

    if (!this.application.clientInformation.personalInformation.spouse) {
      this.application.clientInformation.personalInformation.spouse = new BasicInformation();
    }

    return this.application.clientInformation.personalInformation;
  }

  setFilingInformation(fi: FilingInformation): void {
    this.application.clientInformation.filingInformation = fi;
  }

  getFilingInformation(): FilingInformation {
    if (this.application.clientInformation.filingInformation === undefined) {
      this.application.clientInformation.filingInformation = new FilingInformation();
    }
    return this.application.clientInformation.filingInformation;
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
    if (!this.application.w2Forms || this.application.w2Forms.length <= 0) {
      this.addToEstimate(0, 0);
      return;
    }
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

  getW2Forms(): W2Form[] {
    return this.application.w2Forms;
  }

  setW2Forms(w2Forms: W2Form[]): void {
    this.application.w2Forms = w2Forms;
  }

  addW2Form(): void {
    if (!this.application.w2Forms) this.application.w2Forms = [];
    this.application.w2Forms.push( new W2Form(this.getClient()) );
  }

  getW2FromList(id: string): W2Form {
    let w2 = _.find(this.application.w2Forms, function(o) {
      return o._id === id;
    });
    console.log("found W2 " + w2);
    return w2;
  }
}
