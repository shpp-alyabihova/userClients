import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { RegisterUser } from '../shared/registerUser';
import { AuthentificationService } from '../services/authentification.service';
import { AuthLocalService } from '../services/auth-local.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: RegisterUser = new RegisterUser();
  registerForm: FormGroup;
  agree: boolean = false;


  constructor(private fb: FormBuilder,
              private authService: AuthentificationService,
              private authLocalService: AuthLocalService,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+(?:\.[a-zA-Z]+)*@(?:[a-zA-Z]+\.)+[a-zA-Z]{2,6}/i)
      ]
      ],
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
      ]
      ],
      agree: [this.agree, Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit() {
    let formVal = this.registerForm.value;

    this.user.firstName = formVal.firstName;
    this.user.lastName = formVal.lastName;
    this.user.username = formVal.username;
    this.user.email = formVal.email;
    this.user.password = formVal.password;
    this.authService.registerUser(this.user).subscribe(
      (res) => {
        let token = res.json() && res.json().data.token;
        this.authLocalService.saveAuthData({ token: token });
        this.registerForm.reset();
        this.router.navigate(['/clients']);
      },
      (err) => {this.handleError(err)}
    );

    console.log('User: ', this.user);
  }



  private handleError(err: any) {
    console.log('ERROR: ', err);
  }

}
