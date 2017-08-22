import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { User } from '../../common/user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserApiService {
  result: any;
  url: string = '/api/v1/users';

  constructor (private http: HttpClientService) {
  }

  findByFilter(filter: object): any {
    let params: URLSearchParams = this.http.objToSearchParams(filter);
    return this.http.get(this.url, params);
  }

  findById(id: string): any {
    return this.http.getById(this.url + "/" + id);
  }

  matchUser(email: string, pass: string): any {
    return this.findByFilter({email: email, password: pass});
  }

  insert(client: User): any {
    return this.http.post(this.url, client);
  }
}
