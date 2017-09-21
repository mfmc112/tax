import { Phone, Client, MailingAddress, BasicInformation } from './';

export class PersonalInformation {
  taxPayer: BasicInformation;
  spouse: BasicInformation;
  mailingAddress: MailingAddress;
  dependents: boolean;

  constructor(client: Client) {
    this.taxPayer = new BasicInformation();
    this.spouse = new BasicInformation();
    this.mailingAddress = new MailingAddress();

    this.setClient(client);
  }

  setClient(client: Client): void {
    this.taxPayer.firstName = client.firstName;
    this.taxPayer.initial = client.middleName;
    this.taxPayer.lastName = client.lastName;
    this.taxPayer.ssn = client.ssn;
  }
}
