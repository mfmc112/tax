import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Injectable()
export class HttpClientService {

  urlBase:string = environment.apiPrefix;//'http://localhost:5000';
  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    //TODO: implement that in the future
    //headers.set('Authorization', 'Basic ' + btoa('username:password'));
  }

  // cleanEmpty(obj: any): void {
  //   for (let propName in obj) {
  //     if (obj[propName] === null || obj[propName] === undefined) {
  //       delete obj[propName];
  //     }
  //   }
  // }

  get(url, filter): Observable<Array<any>> {
    // this.cleanEmpty(filter);
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.urlBase + url, {headers: headers, params: filter});
  }

  getById(url): Observable<Array<any>> {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(this.urlBase + url, {headers: headers});
  }

  post(url, data): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    // headers.append('Access-Control-Allow-Origin', '*');
    return this.http.post(this.urlBase + url, data, {headers: headers});
  }

  put(url, data): Observable<any> {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(this.urlBase + url, data, {headers: headers});
  }

  // delete(url, data) {
  //   let headers = new Headers();
  //   this.createAuthorizationHeader(headers);
  //   this.addLocalhostHeader(headers);
  //   return this.http.delete(url, data, {headers: headers});
  // }

  objToSearchParams(obj): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();
    for (var key in obj) {
        if (obj.hasOwnProperty(key) && !_.isEmpty(obj[key]))
            params.set(key, obj[key]);
    }
    return params;
  }

}
