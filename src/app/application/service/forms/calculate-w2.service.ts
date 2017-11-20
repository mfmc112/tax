import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../../api/application-api.service';
import { FormulaService } from '../formula.service';
import { CalculateService } from '../calculate.service';
import { AbstractControl } from '@angular/forms';
import { Application, ClientInformation, FilingInformation} from '../../../common/';
import * as _ from 'lodash';

@Injectable()
export class CalculateW2Service extends CalculateService {

  formula: any;

  constructor(private formulaService: FormulaService) {
    super();
    this.formula = formulaService.getFormula();
  }

  calculateW2Field1(application: Application): number {
    let field1 = 0;
    if (application.w2Forms && application.w2Forms[0]) {
      _.each(application.w2Forms, form => {
        field1 = field1 + form.field1;
      });
    }
    return field1;
  }

  public calculateBox2(application: Application, amount: number): number {
    let box2 = 0;
    let percent = this.formula[application.year]["percent"]["w2"]["box2"];
    if (amount) box2 = Math.round(amount * (percent/100));
    return box2;
  }

  calculateBox8(application: Application, amount: number): number {
    return this.calculateBox2(application, amount);
  }

  /*
   * Calculate box 3 and box 4
   */
  calculateBox3(application: Application, box1: number, form: AbstractControl): number {
    if (!box1 || box1 == 0) return 0;
    let box3Ts = this.formula[application.year]["threshold"]["w2"]["box3"];
    let box3 = box3Ts;
    if (box1 < box3Ts) box3 = box1;
    form.setValue(this.calculateBox4(application, box3));
    return box3;
  }

  calculateBox4(application: Application, amount: number): number {
    let box4 = 0;
    if (amount) {
      let percent = this.formula[application.year]["percent"]["w2"]["box4"];
      box4 = Math.round(amount * (percent/100));
    }
    return box4;
  }

  calculateBox5(application: Application, box1: number): number {
    if (!box1 || box1 == 0) return 0;
    return box1;
  }

  calculateBox6(application: Application, box1: number): number {
    let box6 = 0;
    if (box1) {
      let status = application.clientInformation.filingInformation.status;
      if (!status) status = "single"; // set single if empty
      let box6Ts = this.formula[application.year]["threshold"]["w2"]["box6"][status];
      let percent = this.formula[application.year]["percent"]["w2"]["box6"]["default"];
      box6 = Math.round(box1 * (percent/100));
      if (box1 > box6Ts) {
        let over = this.formula[application.year]["percent"]["w2"]["box6"]["over"];
        box6 = box6 + ((box1 - box6Ts) * (over/100));
      }
    }
    return box6;
  }

  calculateW2Forms(application: Application) {
    if (!application.w2Forms || application.w2Forms.length <= 0 || !application.w2Forms[0]) {
      application.w2Forms = undefined;
      this.addToEstimate(application, 0, 0);
      return;
    }
    _.each(application.w2Forms, form => {
      if (!_.isEmpty(form.field1) || form.field1 >= 0) {
        application.currentAgi = this.getCurrentAGI(application) + Number(form.field1);
        let estimated = this.calculateBox2(application, form.field1);
        let paid = Number(form.field2);
        this.addToEstimate(application, estimated, paid);
      }
      if (!_.isEmpty(form.field3) || form.field3 >= 0) {
        let estimated = this.calculateBox4(application, form.field3);
        let paid = Number(form.field4);
        this.addToEstimate(application, estimated, paid);
      }
      if (!_.isEmpty(form.field5) || form.field5 >= 0) {
        let estimated = this.calculateBox6(application, form.field5);
        let paid = Number(form.field6);
        this.addToEstimate(application, estimated, paid);
      }
      if (!_.isEmpty(form.field8) || form.field8 >= 0) {
        application.currentAgi = this.getCurrentAGI(application) + Number(form.field8);
        let estimated = this.calculateBox8(application, form.field8);
        this.addToEstimate(application, estimated, 0);
      }
    });
  }

}
