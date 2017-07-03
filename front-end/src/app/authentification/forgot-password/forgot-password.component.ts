import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthentificationService } from '../services/authentification.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email = {
    correct: false,
    send: false
  };
  forgotPasswordForm: FormGroup;


  constructor(private fb: FormBuilder,
              private authService: AuthentificationService) {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+(?:\.[a-zA-Z]+)*@(?:[a-zA-Z]+\.)+[a-zA-Z]{2,6}/i)
      ]
      ]
    })
  };
  ngOnInit() { }

  onSubmit() {
    let formVal = this.forgotPasswordForm.value;
    this.authService.forgotPassword({ email: formVal.email }).subscribe(
      (res)=> {
        this.email.send = true;
        console.log('response: ', res);
        this.email.correct = true;
      },
      (err)=> {
        this.handleError(err);
      }
    );

  }


  private handleError(err: any) {
    this.email.send = true;
  }


}
