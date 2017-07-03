

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginUser } from '../shared/loginUser';
import { AuthentificationService } from '../services/authentification.service';
import { AuthLocalService } from '../services/auth-local.service';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})


export class AuthorizationComponent implements OnInit {
  user: LoginUser = new LoginUser();
  loginForm: FormGroup;
  remember: boolean = false;


  constructor(private fb: FormBuilder,
              private authService: AuthentificationService,
              private authLocalService: AuthLocalService,
              private router: Router)
  {

    this.user = this.authLocalService.getStoredLoggedUser();
    if (this.user.password) {
      this.remember = true;
    }
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [this.user.username, [
        Validators.required
        ]
      ],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
      ]
      ],
      remember: this.remember
    });
  }

  ngOnInit() { }

  onSubmit() {
    let formVal = this.loginForm.value;
    this.user.username = formVal.username;
    this.user.password = formVal.password;
    this.authService.loginUser(this.user).subscribe(
      (res) => {
        let token = res.json() && res.json().data.token;
        this.authLocalService.saveAuthData({ token: token, user: (formVal.remember) ? this.user : '' });
        this.router.navigate(['/clients']);
      },
      (err) => {this.handleError(err)}
    );
  }


  private handleError(err: any) {
    console.log('ERROR: ', err);
  }

}
