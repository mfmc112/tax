import { Client, MailingAddress } from './';

export class Form1099G {
  _id: string;
  form1099gFor: string = 'taxpayer';
  ssn: string;
  name: string;
  accountNumber: string;
  sameAddressAsHome: boolean = true;
  alteredOrHandwritten: boolean = false;
  address: MailingAddress;
  payerEin: string;
  payerName: string;
  payerCareOf: string;
  payerAddress: MailingAddress;
  payerPhone: string;
  corrected: boolean;
  field1: number;
  field2: string;
  field2State: string;
  field3: string;
  field4: number;
  field10a: string;
  field10b: string;
  field11: string;

  constructor(client: Client) {
    let middleName = ((client.middleName) ? client.middleName : "");
    this.name = client.firstName + " " + middleName + " " + client.lastName;
    this.ssn = client.ssn;
  }
}
