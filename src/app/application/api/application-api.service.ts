import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Application } from '../../common/application';
import { Client } from '../../common/client';
import { ClientApiService } from '../../client/client-api.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationApiService {
  result: any;
  url: string = '/api/v1/applications';

  constructor (
    private http: HttpClientService,
    private clientApi: ClientApiService
  ) {  }

  findByFilter(filter: object): any {
    let params: URLSearchParams = this.http.objToSearchParams(filter);
    return this.http.get(this.url, params);
  };

  findById(id: string): any {
    return this.http.getById(this.url + "/" + id);
  }

  findByClient(client: Client): any {
    if (client.firstName || client.lastName || client.ssn) return {error: "Required fields for search of client not met"};
    return this.clientApi.findByFilter({firstName: client.firstName, lastName: client.lastName, ssn: client.ssn}).subscribe(client => {
      return this.findByFilter({client: client._id});
    });
  }

  insert(application: Application): any {
    return this.http.post(this.url, application);
  }
}
