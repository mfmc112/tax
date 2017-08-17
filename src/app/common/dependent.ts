import { TaxCreditEIC } from './tax-credit-eic';

export class Dependent {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: Date;
  age: number;
  ssn: string;
  identityProtectionPin: string;
  relationship: string;
  monthsInHome: number;
  code: number;
  eicCode: number;
  taxCreditEIC: TaxCreditEIC;
}
