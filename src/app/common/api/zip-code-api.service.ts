import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';

@Injectable()
export class ZipCodeApiService {
  result: any;
  url: string = '/api/v1/zipcode';

  constructor ( private http: HttpClientService ) {  }

  findByZipCode(zipcode: number): any {
    if (!zipcode || zipcode <1000 || zipcode >9999) return;
    return this.http.getById(this.url + "/" + zipcode);
  }

}
