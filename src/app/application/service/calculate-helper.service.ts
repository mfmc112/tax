import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../api/application-api.service';
import { CalculateW2Service } from './forms/calculate-w2.service';
import { CalculateW2GService } from './forms/calculate-w2g.service';
import { AbstractControl } from '@angular/forms';
import { Application, Client, User, ClientInformation, PersonalInformation, FilingInformation, Dependent, BasicInformation, W2Form, W2GForm, Form1040, Form1099G } from '../../common/';
import * as _ from 'lodash';

@Injectable()
export class CalculateHelperService {

  constructor(
    private calculateW2Service: CalculateW2Service,
    private calculateW2GService: CalculateW2GService
  ) { }

  getCurrentAGI(application: Application): number {
    return (application && application.currentAgi) ? Number(application.currentAgi) : 0;
  }

  addToEstimate(application: Application, estimated: number, paid: number): void {
    if (!_.isNumber(paid)) paid = 0;
    application.estimate += Math.round(paid-estimated);
  }

  calculateW2Forms(application: Application) {
    this.calculateW2Service.calculateW2Forms(application)
  }

  calculateW2Field1(application: Application): number {
    return this.calculateW2Service.calculateW2Field1(application);
  }

  calculateBox2(application: Application, amount: number): number {
    return this.calculateW2Service.calculateBox2(application, amount);
  }

  calculateBox8(application: Application, amount: number): number {
    return this.calculateW2Service.calculateBox8(application, amount);
  }

  calculateBox3(application: Application, box1: number, form: AbstractControl): number {
    return this.calculateW2Service.calculateBox3(application, box1, form);
  }

  calculateBox4(application: Application, amount: number): number {
    return this.calculateW2Service.calculateBox4(application, amount);
  }

  calculateBox5(application: Application, box1: number): number {
    return this.calculateW2Service.calculateBox5(application, box1);
  }

  calculateBox6(application: Application, box1: number): number {
    return this.calculateW2Service.calculateBox6(application, box1);
  }


  calculateW2GForms(application: Application) {
    this.calculateW2GService.calculateW2GForms(application)
  }
}
