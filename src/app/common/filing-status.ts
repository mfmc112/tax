export class FilingStatus {
  filingStatus: string; // single, Married Filing Jointly (even if one had income), Marries filing Separately, Head of household (with qualifying person)
  marriedInDecemberOf: number; // 2016
  marriedInDecemberStatus: string; // Y or N
  claimInAnotherPersons: boolean;
  filingJointlyButSpouseInAnotherPersons: boolean;
  headOfHomeClaimingNonresidentialAlienSpouse: boolean;
}
