import { Phone } from './phone';
import { PersonalInformation } from './personal-information';
import { FilingInformation } from './filing-information';
import { Dependent } from './dependent';

export class ClientInformation {
  personalInformation: PersonalInformation;
  filingInformation: FilingInformation;
  dependents: Dependent[];
}
