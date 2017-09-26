import * as _ from 'lodash';

export class Utils {

  public removeCurrencyFormat(value: string): number {
    if (value) {
      let obj = _.split(value,'.');

      return Number((obj[0]+"").replace(/[^0-9]*/g,""));
    } else {
      return 0;
    }
  }

}
