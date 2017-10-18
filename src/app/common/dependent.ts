import { TaxCreditEIC, BasicInformation, SpecialCondition } from './';

export class Dependent {
  _id: string;
  basicInfo: BasicInformation;
  relationship: string;
  monthsInHome: number;
  identityProtectionPin: number;
  ctc: boolean;
  code: number;
  eicCode: string;
  taxCreditEIC: TaxCreditEIC;
  relationshipOtherPerson: string;
  specialCondition: SpecialCondition;
  dateOfDeath: Date;
}
