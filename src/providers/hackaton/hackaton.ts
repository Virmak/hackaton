import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HackatonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HackatonProvider {

  private baseUrl: string = 'http://localhost/hackaton/backend/public';

  constructor(public http: HttpClient) {
    console.log('Hello HackatonProvider Provider');
  }

  getUserById(id): Observable<any> {
    return this.http.post(this.baseUrl + '/user/get', id);
  }

}
