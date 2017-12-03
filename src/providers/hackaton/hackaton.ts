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
    
    let body = new FormData();
    body.append('id', id);
    return this.http.post(this.baseUrl + '/user/get', body);
  }

  createEvent(eventData): Observable<any> {

    let body = new FormData();
    body.append('name', eventData.name);
    body.append('start_date', eventData.start_date);
    body.append('description', eventData.description);
    body.append('location', eventData.location);
    body.append('user_id', eventData.user_id);

    return this.http.post(this.baseUrl + '/event/create', body);
  }

  getEvents() {
    return this.http.post(this.baseUrl + '/event/all', '');
  }

}
