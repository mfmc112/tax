import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../api/application-api.service';
import { AbstractControl } from '@angular/forms';
import { Application, Client, User, ClientInformation, PersonalInformation, FilingInformation, Dependent, BasicInformation, W2Form } from '../../common/';
import * as _ from 'lodash';

@Injectable()
export class CurrentApplicationService {

  private application: Application;
  private calcHelper = {
    "2017": {
      "threshold": {
        "box3": 127200,
        "box6": {
          "single": 200000,
          "jointly": 250000,
          "separate": 125000,
          "head": 200000,
          "widow": 200000
        }
      },
      "percent": {
        "box2": 10,
        "box4": 6.2,
        "box6": {
          "default": 1.45,
          "over": 0.9
        }
      }
    }
  }

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

  calculateW2Field1(): number {
    let field1 = 0;
    if (this.application.w2Forms && this.application.w2Forms[0]) {
      _.each(this.application.w2Forms, form => {
        field1 = field1 + form.field1;
      });
    }
    return field1;
  }

  calculate1040Box7(): number {
    let box7 = 0;
    if (this.application.w2Forms && this.application.w2Forms[0]) {
      _.each(this.application.w2Forms, form => {
        box7 = box7 + (form.field1 + form.field8);
      });
    }
    return box7;
  }

  calculateBox2(amount: number): number {
    let box2 = 0;
    let percent = this.calcHelper[this.application.year]["percent"]["box2"];
    if (amount) box2 = Math.round(amount * (percent/100));
    return box2;
  }

  calculateBox8(amount: number): number {
    return this.calculateBox2(amount);
  }

  /*
   * Calculate box 3 and box 4
   */
  calculateBox3(box1: number, form: AbstractControl): number {
    if (!box1 || box1 == 0) return 0;
    let box3Ts = this.calcHelper[this.application.year]["threshold"]["box3"];
    let box3 = box3Ts;
    if (box1 < box3Ts) box3 = box1;
    form.setValue(this.calculateBox4(box3));
    return box3;
  }

  private calculateBox4(amount: number): number {
    let box4 = 0;
    if (amount) {
      let percent = this.calcHelper[this.application.year]["percent"]["box4"];
      box4 = Math.round(amount * (percent/100));
    }
    return box4;
  }

  calculateBox5(box1: number): number {
    if (!box1 || box1 == 0) return 0;
    return box1;
  }

  calculateBox6(box1: number): number {
    let box6 = 0;
    if (box1) {
      let status = this.application.clientInformation.filingInformation.status;
      if (!status) status = "single"; // set single if empty
      let box6Ts = this.calcHelper[this.application.year]["threshold"]["box6"][status];
      let percent = this.calcHelper[this.application.year]["percent"]["box6"]["default"];
      box6 = Math.round(box1 * (percent/100));
      if (box1 > box6Ts) {
        let over = this.calcHelper[this.application.year]["percent"]["box6"]["over"];
        box6 = box6 + ((box1 - box6Ts) * (over/100));
      }
    }
    return box6;
  }

  calculate(): void {
    this.application.estimate = 0;
    this.application.currentAgi = 0;
    if (!this.application.w2Forms || this.application.w2Forms.length <= 0 || !this.application.w2Forms[0]) {
      this.application.w2Forms = undefined;
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
      if (!_.isEmpty(form.field8) || form.field8 >= 0) {
        this.application.currentAgi = this.getCurrentAGI() + Number(form.field8);
        let estimated = this.calculateBox8(form.field8);
        this.addToEstimate(estimated, 0);
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
    return w2;
  }

  saveW2(id: string, w2: W2Form): void {
    let w2Index = _.findIndex(this.application.w2Forms, function(o) {
      return o._id === id;
    });
    this.application.w2Forms[w2Index] = w2;
  }

  setDependents(dependents: Dependent[]): void {
    this.application.dependents = dependents;
  }

  getDependents(): Dependent[] {
    if (this.application.dependents === undefined) {
      this.application.dependents = [];
    }
    return this.application.dependents;
  }

  addDependent(): void {
    if (!this.application.dependents) this.application.dependents = [];
    this.application.dependents.push( new Dependent() );
  }

  getDependentFromList(id: string): Dependent {
    if (!this.application.dependents) this.application.dependents = [];
    let dependent = _.find(this.application.dependents, function(o) {
      return o._id === id;
    });
    return dependent;
  }

  saveDependent(dependent: Dependent): void {
    let dependentIndex = _.findIndex(this.application.dependents, function(o) {
      return o._id === dependent._id;
    });
    if (dependentIndex === -1) {
      if (this.application.dependents.length <=0) dependentIndex = 0;
      else dependentIndex = this.application.dependents.length;
    }
    this.application.dependents[dependentIndex] = dependent;
  }
}
