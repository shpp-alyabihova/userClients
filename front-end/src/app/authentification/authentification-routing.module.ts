import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResetForgottenPasswordComponent } from './reset-forgotten-password/reset-forgotten-password.component';
import { AuthentificationLayoutComponent } from './authentification-layout/authentification-layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const authentificationRoutes: Routes = <Routes>[
  {path: '', component: AuthentificationLayoutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'reset-password/:link', component: ResetForgottenPasswordComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authentificationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthentificationRoutingModule { }
