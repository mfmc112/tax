export class Utils {

  public removeCurrencyFormat(value: string): number {
    if (value) {
      return Number((value+"").replace(/[^0-9]*/g,""));
    } else {
      return 0;
    }
  }

}
