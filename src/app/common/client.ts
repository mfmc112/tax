export class Client {
  firstName:string;
  lastName:string;
  middleName:string;
  ssn:string;
  itin:string;

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setMiddleName(middleName: string) {
    this.middleName = middleName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setSSN(ssn: string) {
    this.ssn = ssn;
  }

  setITIN(itin: string) {
    this.itin = itin;
  }
}
