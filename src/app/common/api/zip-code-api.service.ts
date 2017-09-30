import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpClientService } from '../../common/http-client.service';

@Injectable()
export class ZipCodeApiService {
  result: any;
  url: string = '/api/v1/zipcode';

  constructor ( private http: HttpClientService ) {  }

  findByZipCode(zipcode: number): any {
    if (!zipcode || zipcode <1000 || zipcode >99999) {
      return Observable.create(observer => {
        observer.next("zipcode must be valid");
        observer.complete();
      });
    }
    return this.http.getById(this.url + "/" + zipcode);
  }

}
