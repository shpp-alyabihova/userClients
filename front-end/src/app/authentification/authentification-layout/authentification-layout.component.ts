import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from '../services/authentification.service';
import { AuthLocalService } from '../services/auth-local.service';
import { Router } from '@angular/router';

import { LoginUser } from '../shared/loginUser';


@Component({
  selector: 'app-authentification-layout',
  templateUrl: './authentification-layout.component.html',
  styleUrls: ['./authentification-layout.component.css']
})
export class AuthentificationLayoutComponent implements OnInit {
  newUser: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  /*sendRequest(userData: any) {
    this.authService.loginUser(userData.user).subscribe(
      (res)=> {
        let token = res.json() && res.json().data.token;
        console.log('TOKEN: ', token);
        console.log('User Remember: ', userData.remember);
        this.authLocalService.saveAuthData({ token: token, user: (userData.remember) ? userData.user : '' });
        this.router.navigate(['/my-page']);
      },
      (err)=> {this.handleError(err)}
    );
  }*/

  singUp() {
    this.newUser = true;
  }

  singIn() {
    this.newUser = false;
  }

  private handleError(err: any) {
    console.log('ERROR: ', err);
  }

}
