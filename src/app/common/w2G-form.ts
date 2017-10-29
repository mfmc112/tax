import { Client, MailingAddress } from './';

export class W2GForm {
  _id: string;
  w2gFor: string = 'taxpayer';
  ssn: string;
  name: string;
  isIdEin: boolean;
  sameAddressAsHome: boolean = true;
  address: MailingAddress;
  alteredOrHandwritten: boolean;
  payerEin: string;
  payerName: string;
  payerCareOfName: string;
  payerAddress: MailingAddress;
  autoCalculate3and6: boolean = true;
  corrected: boolean;
  field1: number;
  field2: number;
  field3: number;
  field4: number;
  field5: number;
  field6: number;
  field7: number;
  field8: number;
  field9: number;
  field10: number;
  field11: number;
  field12: string;
  field13: number;
  field14: string;
  field15: number;
  field16: string;
  field17: number;
  field18: string;

  constructor(client: Client) {
    let middleName = ((client.middleName) ? client.middleName : "");
    this.name = client.firstName + " " + middleName + " " + client.lastName;
    this.ssn = client.ssn;
  }
}
