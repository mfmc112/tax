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

  constructor(client: Client) {
    this.employeeName = client.firstName + " " + client.middleName + " " + client.lastName;
    this.ssn = client.ssn;
  }
}
