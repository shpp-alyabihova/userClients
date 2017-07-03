import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthentificationService } from '../services/authentification.service';
import { AuthLocalService } from '../services/auth-local.service';


@Component({
  selector: 'app-reset-forgotten-password',
  templateUrl: './reset-forgotten-password.component.html',
  styleUrls: ['./reset-forgotten-password.component.css']
})
export class ResetForgottenPasswordComponent implements OnInit {
  link : string;
  email: string;
  err: string;
  resetPassword: boolean;
  resetPasswordForm: FormGroup;


  constructor(private fb: FormBuilder,
              private authLocalService: AuthLocalService,
              private authService: AuthentificationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.link = this.activatedRoute.snapshot.params['link'];
    this.createForm();
  }

  createForm() {
    this.resetPasswordForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]
      ],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]]
    })
  };
  ngOnInit() {
    this.authService.requestOnResetPassword(this.link).subscribe(
      (res)=> {
        this.email = res.json() && res.json().data.email;
        this.resetPassword = true;
      },
      (err)=> {
        let error = err.json() && err.json().error.message;
        this.resetPassword = false;
        this.handleError(error);
      }
    )
  }

  onSubmit() {
    let formVal = this.resetPasswordForm.value;
    this.authService.resetPassword({ link: this.link, email: this.email, password: formVal.password }).subscribe(
      (res)=> {
        let token = res.json() && res.json().data.token;
        this.authLocalService.saveAuthData({ token: token });
        this.router.navigate(['/clients']);
      },
      (err)=> {
        let error = err.json() && err.json().error.message;
        this.resetPassword = false;
        this.handleError(error);
      }
    );

  }


  private handleError(err: any) {
    this.err = err || 'Can not get response from server';
    this.resetPassword = false;
  }

}
