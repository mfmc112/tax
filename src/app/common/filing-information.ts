import { ReturnInfo } from './return-info';
import { SpecialProcessing } from './special-processing';
import { FilingStatus } from './filing-status';
import { PinAuth } from './pin-auth';

export class FilingInformation {
  status: string; // single, Married Filing Jointly (even if one had income), Marries filing Separately, Head of household (with qualifying person)
  claimAnother: boolean;
  filingJointlyButSpouseInAnotherPersons: boolean;
  headClaimNonResidentialAlienSpouse: boolean;

  disasterDesignation: string;
  payerSpecialProcessing: SpecialProcessing;
  spouseSpecialProcessing: SpecialProcessing;
  payerDonate: boolean;
  spouseDonate: boolean;


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
