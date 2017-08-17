import { ClientInformation } from './client-information';

export class TaxReturn {
  estimate: number;
  currentAGI: number;
  returnYear: number;
  clientInformation: ClientInformation;


  setEstimate(estimate: number) {
    this.estimate = estimate;
  }

  setCurrentAGI(currentAGI: number) {
    this.currentAGI = currentAGI;
  }
}
