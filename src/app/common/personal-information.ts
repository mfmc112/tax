import { SpouseInformation } from './spouse-information';
import { MailingAddress } from './mailing-address';
import { Phone } from './phone';

export class PersonalInformation {
  spouseInformation: SpouseInformation;
  maillingAddress: MailingAddress;
  
  firstName: string;
  initial: string;
  lastName: string;
  sufix: string;
  ssn: string;
  dateOfBirth: Date;
  age: number;
  occupation: string;
  phone : Phone;
}
