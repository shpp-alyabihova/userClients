import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


import { FormsModule } from '@angular/forms';

import { AppUserClientsRoutingModule } from './app-user-clients-routing.module';
import { ClientsComponentComponent } from './clients-component/clients-component.component';
import { UsersComponentComponent } from './users-component/users.component';
import { AppUserClientsComponent } from './app-user-clients.component';
import { UserClientsServiceService } from './services/user-clients-service.service';
import { AuthLocalService } from '../authentification/services/auth-local.service';


@NgModule({
  imports: [
    CommonModule,
    AppUserClientsRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppUserClientsComponent,
    UsersComponentComponent,
    ClientsComponentComponent
  ],
  providers: [
    UserClientsServiceService,
    AuthLocalService
  ],
  exports: [
  ],
  bootstrap: [

  ]
})
export class AppUserClientsModule { }
