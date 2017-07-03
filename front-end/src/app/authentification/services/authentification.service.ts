import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthentificationService {
  private uri = 'http://localhost:8082/auth';

  constructor(private http: Http) { }

  loginUser(userData: any): Observable<Response> {
    return this.http.post(`${this.uri}/login`, userData);
  }

  registerUser(userData: any): Observable<Response> {
    return this.http.post(`${this.uri}/register`, userData);
  }

  forgotPassword(email: {[key: string]: string}): Observable<Response> {
    return this.http.post(`${this.uri}/reset-password`, email);
  }

  requestOnResetPassword(link: string): Observable<Response> {
    let queryParams = this.getURLSearchParams([{ name: "link", value: link }]);
    return this.http.get(`${this.uri}/reset-password/${link}`);
  }

  resetPassword(userData: any): Observable<Response> {
    let queryParams = this.getURLSearchParams([{ name: "link", value: userData.link }]);
    return this.http.put(`${this.uri}/reset-password/${userData.link}`, { email: userData.email, password: userData.password });
  }

  private getHeaders(arrayHeaders: any[]): Headers {
  let headers = new Headers();
  arrayHeaders.forEach((header)=> {
    headers.append(header.name, header.value);
  });
  return headers;
}

  private getRequestOptions(headers: Headers): RequestOptions {
    return new RequestOptions({ headers: headers });
  }

  private getURLSearchParams(params: any[]): URLSearchParams {
    let urlParams: URLSearchParams = new URLSearchParams();
    params.forEach((param) => {
      urlParams.set(param.name, param.value);
    });
    return urlParams;
  }

}
