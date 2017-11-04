import { Client, MailingAddress } from './';

export class W2GForm {
  _id: string;
  w2gFor: string = 'taxpayer';
  ssn: string;
  name: string;
  isIdEin: boolean;
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
  field3: string;
  field4: number;
  field5: string;
  field6: string;
  field7: number;
  field8: string;
  field9: string;
  field10: string;
  field11: string;
  field12: string;
  field13State: string;
  field13Number: string;
  field14: number;
  field15: number;
  field16: number;
  field17: number;
  field18: string;

  constructor(client: Client) {
    let middleName = ((client.middleName) ? client.middleName : "");
    this.name = client.firstName + " " + middleName + " " + client.lastName;
    this.ssn = client.ssn;
  }
}
