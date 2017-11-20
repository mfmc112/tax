import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../../api/application-api.service';
import { FormulaService } from '../formula.service';
import { CalculateService } from '../calculate.service';
import { AbstractControl } from '@angular/forms';
import { Application, W2GForm } from '../../../common/';
import * as _ from 'lodash';

@Injectable()
export class CalculateW2GService extends CalculateService {

  formula: any;

  constructor(private formulaService: FormulaService) {
    super();
    this.formula = formulaService.getFormula();
  }

  public calculateField1(application: Application, amount: number): number {
    let field4 = 0;
    let percent = this.formula[application.year]["percent"]["w2g"]["field1"];
    if (amount) field4 = Math.round(amount * (percent/100));
    return field4;
  }

  calculateW2GForms(application: Application) {
    if (!application.w2GForms || application.w2GForms.length <= 0 || !application.w2GForms[0]) {
      application.w2GForms = undefined;
      this.addToEstimate(application, 0, 0);
      return;
    }
    _.each(application.w2GForms, form => {
      if (!_.isEmpty(form.field1) || form.field1 >= 0) {
        application.currentAgi = this.getCurrentAGI(application) + Number(form.field1);
        let estimated = this.calculateField1(application, form.field1);
        let paid = Number(form.field4);
        this.addToEstimate(application, estimated, paid);
      }
    });
  }

}
