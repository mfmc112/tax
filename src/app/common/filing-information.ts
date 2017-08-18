import { ReturnInfo } from './return-info';
import { SpecialProcessing } from './special-processing';
import { FilingStatus } from './filing-status';
import { PinAuth } from './pin-auth';

export class FilingInformation {
  filingStatus: FilingStatus;
  specialProcessing: SpecialProcessing;
  taxpayerDonateToPresidentialCampain: number;
  spouseDonateToPresidentialCampain: number;
  returnInfo: ReturnInfo;

  eroPin: string;
  isPratictionerPin: boolean;
  formsWithPin: string[];

  taxPayerPinsAuth: PinAuth;
  spousePinAuth: PinAuth;

  // THIRD PARTY DESIGNEE
  thirdPartyDesignee: boolean;

  // CLIENT AQUISITION
  clientAquired: string
}
