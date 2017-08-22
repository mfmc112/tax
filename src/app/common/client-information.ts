import { Phone } from './phone';
import { PersonalInformation } from './personal-information';
import { FilingInformation } from './filing-information';
import { Dependent } from './dependent';
import { Client } from './client';

export class ClientInformation {
  personalInformation: PersonalInformation;
  filingInformation: FilingInformation;
  dependents: Dependent[];

  constructor(client: Client) {
    this.personalInformation = new PersonalInformation();
    this.personalInformation.firstName = client.firstName;
    this.personalInformation.initial = client.middleName;
    this.personalInformation.lastName = client.lastName;
    this.personalInformation.ssn = client.ssn;
  }
}
