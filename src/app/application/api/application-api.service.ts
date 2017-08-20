import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Application } from '../../common/application';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationApiService {
  result: any;
  url: string = '/api/v1/applications';

  constructor (private http: HttpClientService) {
  }

  findByFilter(filter: object): any {
    return this.http.get(this.url);
  }

  findById(id: string): any {
    return this.http.get(this.url + "/" + id);
  }

  insert(application: Application): any {
    return this.http.post(this.url, application);
  }
}
