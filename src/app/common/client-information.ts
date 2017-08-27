import { PersonalInformation, FilingInformation, Dependent, Client, Phone } from './';

export class ClientInformation {
  personalInformation: PersonalInformation;
  filingInformation: FilingInformation;
  dependents: Dependent[];

  constructor(client: Client) {
    this.personalInformation = new PersonalInformation(client);
  }
}
