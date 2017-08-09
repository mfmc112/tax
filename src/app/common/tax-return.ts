export class TaxReturn {
  estimate: number;
  currentAGI: number;

  setEstimate(estimate: number) {
    this.estimate = estimate;
  }

  setCurrentAGI(currentAGI: number) {
    this.currentAGI = currentAGI;
  }
}
