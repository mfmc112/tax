import { Injectable } from '@angular/core';
import { Application } from '../../common/';
import * as _ from 'lodash';

@Injectable()
export class CalculateService {

  getCurrentAGI(application: Application): number {
    return (application && application.currentAgi) ? Number(application.currentAgi) : 0;
  }

  addToEstimate(application: Application, estimated: number, paid: number): void {
    if (!_.isNumber(paid)) paid = 0;
    application.estimate += Math.round(paid-estimated);
  }
}
