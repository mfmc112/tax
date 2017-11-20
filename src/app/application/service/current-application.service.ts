import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../api/application-api.service';
import { CalculateHelperService } from './calculate-helper.service';
import { AbstractControl } from '@angular/forms';
import { Application, Client, User, ClientInformation, PersonalInformation, FilingInformation, Dependent, BasicInformation, W2Form, W2GForm, Form1040, Form1099G } from '../../common/';
import * as _ from 'lodash';

@Injectable()
export class CurrentApplicationService {

  private application: Application;

  constructor(
    private applicationApiService: ApplicationApiService,
    private calculateHelperService: CalculateHelperService
  ) {  }

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
    return this.calculateHelperService.getCurrentAGI(this.application);
    // return (this.application && this.application.currentAgi) ? Number(this.application.currentAgi) : 0;
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
    return this.calculateHelperService.calculateW2Field1(this.application);
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

  calculateBox2(amount: number): number { return this.calculateHelperService.calculateBox2(this.application, amount); }
  calculateBox8(amount: number): number { return this.calculateHelperService.calculateBox8(this.application, amount); }
  calculateBox3(box1: number, form: AbstractControl): number { return this.calculateHelperService.calculateBox3(this.application, box1, form); }
  private calculateBox4(amount: number): number { return this.calculateHelperService.calculateBox4(this.application, amount); }
  calculateBox5(box1: number): number { return this.calculateHelperService.calculateBox5(this.application, box1); }
  calculateBox6(box1: number): number { return this.calculateHelperService.calculateBox6(this.application, box1); }

  calculate(): void {
    this.application.estimate = 0;
    this.application.currentAgi = 0;
    this.calculateW2Forms();
    this.calculateW2GForms();
  }

  calculateW2Forms() {
    this.calculateHelperService.calculateW2Forms(this.application);
  }

  calculateW2GForms() {
    this.calculateHelperService.calculateW2GForms(this.application);
  }

  addToEstimate(estimated: number, paid: number): void {
    this.calculateHelperService.addToEstimate(this.application, estimated, paid);
  }

  getDependents(): Dependent[] {
    if (this.application.dependents === undefined) {
      this.application.dependents = [];
    }
    return this.application.dependents;
  }
  getW2Forms(): W2Form[] { return this.application.w2Forms; }
  getW2GForms(): W2GForm[] { return this.application.w2GForms; }
  getForms1099G(): Form1099G[] { return this.application.forms1099G; }
  getForm1040() : Form1040 {
    if (!this.application.form1040) return new Form1040();
    return this.application.form1040;
  }

  setDependents(dependents: Dependent[]): void { this.application.dependents = dependents; }
  setW2Forms(w2Forms: W2Form[]): void { this.application.w2Forms = w2Forms; }
  setW2GForms(w2GForms: W2GForm[]): void { this.application.w2GForms = w2GForms; }
  setForms1099G(forms1099G: Form1099G[]): void { this.application.forms1099G = forms1099G; }
  setForm1040(form1040: Form1040): void { this.application.form1040 = form1040; }

  addDependent(): void {
    if (!this.application.dependents) this.application.dependents = [];
    this.application.dependents.push( new Dependent() );
  }

  addW2Form(): void {
    if (!this.application.w2Forms) this.application.w2Forms = [];
    this.application.w2Forms.push( new W2Form(this.getClient()) );
  }

  addW2GForm(): void {
    if (!this.application.w2GForms) this.application.w2GForms = [];
    this.application.w2GForms.push( new W2GForm(this.getClient()) );
  }

  addForm1099G(): void {
    if (!this.application.forms1099G) this.application.forms1099G = [];
    this.application.forms1099G.push( new Form1099G(this.getClient()) );
  }

  getDependentFromList(id: string): Dependent {
    if (!this.application.dependents) this.application.dependents = [];
    let dependent = _.find(this.application.dependents, function(o) {
      return o._id === id;
    });
    return dependent;
  }

  getW2FromList(id: string): W2Form {
    let w2 = _.find(this.application.w2Forms, function(o) {
      return o._id === id;
    });
    return w2;
  }

  getW2GFromList(id: string): W2GForm {
    let w2g = _.find(this.application.w2GForms, function(o) {
      return o._id === id;
    });
    return w2g;
  }

  getForm1099GFromList(id: string): Form1099G {
    let form1099g = _.find(this.application.forms1099G, function(o) {
      return o._id === id;
    });
    return form1099g;
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

  saveW2(id: string, w2: W2Form): void {
    let w2Index = _.findIndex(this.application.w2Forms, function(o) {
      return o._id === id;
    });
    if (w2Index === -1) {
      if (this.application.w2Forms.length <=0) w2Index = 0;
      else w2Index = this.application.w2Forms.length;
    }
    this.application.w2Forms[w2Index] = w2;
  }

  saveW2G(id: string, w2g: W2GForm): void {
    let w2GIndex = _.findIndex(this.application.w2GForms, function(o) {
      return o._id === id;
    });
    if (w2GIndex === -1) {
      if (this.application.w2GForms.length <=0) w2GIndex = 0;
      else w2GIndex = this.application.w2GForms.length;
    }
    this.application.w2GForms[w2GIndex] = w2g;
  }

  saveForm1099G(id: string, form1099g: Form1099G): void {
    let form1099GIndex = _.findIndex(this.application.forms1099G, function(o) {
      return o._id === id;
    });
    if (form1099GIndex === -1) {
      if (this.application.forms1099G.length <=0) form1099GIndex = 0;
      else form1099GIndex = this.application.forms1099G.length;
    }
    this.application.forms1099G[form1099GIndex] = form1099g;
  }

  hasW2(): boolean { return (this.application && this.application.w2Forms && this.application.w2Forms.length > 0); }
  hasDependent(): boolean { return (this.application && this.application.dependents && this.application.dependents.length > 0); }
  hasW2G(): boolean { return (this.application && this.application.w2GForms && this.application.w2GForms.length > 0); }
  has1099G(): boolean { return (this.application && this.application.forms1099G && this.application.forms1099G.length > 0); }
}
