import { Injectable } from '@angular/core';
import { TaxReturn } from './common/tax-return';

@Injectable()
export class WorkingTaxReturnService {

  private taxReturn: TaxReturn;

  getTaxReturn(): TaxReturn {
    return this.taxReturn;
  }

  setTaxReturn(taxReturn: TaxReturn): void {
    this.taxReturn = taxReturn;
  }
}
