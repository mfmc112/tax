import { Injectable } from '@angular/core';
import { ApplicationApiService } from '../api/application-api.service';

@Injectable()
export class FormulaService {

  public formula: any = {
    "2017": {
      "threshold": {
        "w2": {
          "box3": 127200,
          "box6": {
            "single": 200000,
            "jointly": 250000,
            "separate": 125000,
            "head": 200000,
            "widow": 200000
          }
        }
      },
      "percent": {
        "w2": {
          "box2": 10,
          "box4": 6.2,
          "box6": {
            "default": 1.45,
            "over": 0.9
          }
        },
        "w2g": {
          "field1": 30
        }
      }
    }
  };

  getFormula() : any {
    return this.formula;
  }
}
