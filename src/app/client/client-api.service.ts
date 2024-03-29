import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Client } from '../common/client';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientApiService {
  result: any;
  url: string = '/api/v1/clients';

  constructor (private http: HttpClientService) {
  }

  findByFilter(filter: object): any {
    let params: URLSearchParams = this.http.objToSearchParams(filter);
    return this.http.get(this.url, params);
  }

  findById(id: string): any {
    return this.http.getById(this.url + "/" + id);
  }

  insert(client: Client): any {
    return this.http.post(this.url, client);
  }
}
