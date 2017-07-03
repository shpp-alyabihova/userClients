import { Injectable } from '@angular/core';

import { authConfig } from '../shared/authConfig';


@Injectable()
export class AuthLocalService {

  constructor() { }

   saveAuthData(userData): void {
    console.log('Save token: ', userData);
    localStorage.setItem(authConfig.usernameLS, JSON.stringify(userData));
  }

  logoutUser(): void {
    let userData = this.getUserData();
    let token = userData && userData.token;
    if (token) {
      delete userData.token;
      this.saveAuthData(userData);
    }
  }

  getUserData(): any {
    return JSON.parse(localStorage.getItem(authConfig.usernameLS));
  }

  getStoredLoggedUser(): any {
    let userData = this.getUserData() && this.getUserData().user;
    return { email: (userData) ? userData.email : '', password: (userData) ? userData.password : '' }
  }

  getToken(): string {
    console.log('Get token: ');

    return this.getUserData() && this.getUserData().token;
  }

  isAuthorized(): boolean {
    return (this.getToken()) ? true : false;
  }

}
