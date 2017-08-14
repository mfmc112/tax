import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { Client } from '../common/client';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientApiService {
  result: any;
  url: string = '/api/clients';

  constructor (private http: HttpClientService) {
  }

  findByFilter(filter: object): any {
    return this.http.get(this.url);
  }

  insert(client: Client): any {
    return this.http.post(this.url, client);
  }
}
