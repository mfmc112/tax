import { ZipCodeApiService } from '../../common/api/zip-code-api.service';

export class ZipCodeUtils {

  constructor(private zipCodeApiService: ZipCodeApiService) {  }

  findZipCode(zipCode: string, cityObj: any, stateObj: any) : any {
    if (zipCode.length < 5) return;
    this.zipCodeApiService.findByZipCode(zipCode).subscribe(
      obj => {
        cityObj.setValue(obj.city);
        stateObj.setValue(obj.state);
      },err => {
        console.log('error on zipcode lookup');
      });
  }
}
