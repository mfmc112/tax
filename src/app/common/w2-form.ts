import { Client, MailingAddress } from './';

export class W2Form {
  w2For: string = 'taxpayer';
  employeeName: string;
  ssn: string;
  ssnDoesntMatch: boolean;
  payerAddressShown: boolean = true;
  sameAddressAsHome: boolean = true;
  employeeAddress: MailingAddress;
  employerAddress: MailingAddress;
  alteredOrHandwritten: boolean;
  corrected: boolean;
  securityInfo: string;
  ein: string;
  employerName: string;
  employerNameControl: string;
  autoCalculate3and6: boolean = true;
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
  field12a1: string;
  field12a2: number;
  field12b1: string;
  field12b2: number;
  field12c1: string;
  field12c2: number;
  field12d1: string;
  field12d2: number;
  field13Statutory: boolean;
  field13Retirement: boolean;
  field13SickPay: boolean;
  field14: string;
  field16: number;
  field17: number;
  field18: number;
  field19: number;
  field20: string;
  state: string;
  esin: string;

  constructor(client: Client) {
    let middleName = ((client.middleName) ? client.middleName : "");
    this.employeeName = client.firstName + " " + middleName + " " + client.lastName;
    this.ssn = client.ssn;
  }
}
