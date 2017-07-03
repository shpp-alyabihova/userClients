import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserClientsServiceService {
  private uri = 'http://localhost:8082/clients';

  constructor(private http: Http) { }

  getUsers(token): Observable<Response> {
    const headers = new Headers({'Authorization': `JWT ${token}`});
    return this.http.get('http://localhost:8082/users', {headers: headers})
  }

  getUserClients(id, token): Observable<Response> {
    const headers = new Headers({'Authorization': `JWT ${token}`});
    return this.http.get(`http://localhost:8082/clients/${id}`, {headers: headers});
  }

}
