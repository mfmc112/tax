import { TaxCreditEIC, BasicInformation } from './';

export class Dependent {
  _id: string;
  basicInfo: BasicInformation;
  relationship: string;
  monthsInHome: number;
  identityProtectionPin: string;
  ctc: boolean;
  code: number;
  eicCode: number;
  taxCreditEIC: TaxCreditEIC;
  relationshipOtherPerson: string;

}
