import { Phone } from './phone';

export class BasicInformation {
  firstName: string;
  initial: string;
  lastName: string;
  suffix: string;
  ssn: string;
  dateOfBirth: Date;
  age: number;
  occupation: string;
  phone : Phone;

  contructor() {
    this.phone = new Phone();
  }
}
