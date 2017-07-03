import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule }   from '@angular/forms';

/*
import { Md5 } from 'ts-md5/dist/md5';
*/

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthentificationService } from './services/authentification.service';
import { AuthLocalService } from './services/auth-local.service';
import { ResetForgottenPasswordComponent } from './reset-forgotten-password/reset-forgotten-password.component';
import { AuthentificationLayoutComponent } from './authentification-layout/authentification-layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthentificationRoutingModule,
   // Md5
  ],
  declarations: [
    AuthorizationComponent,
    RegistrationComponent,
    ResetForgottenPasswordComponent,
    AuthentificationLayoutComponent,
    ForgotPasswordComponent
  ],
  providers: [
    AuthLocalService,
    AuthentificationService
  ]

})
export class AuthentificationModule { }
