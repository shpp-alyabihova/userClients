import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { AppUserClientsModule } from './projects/app-user-clients.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { AuthGuard } from './authentification/authGurd';
import { AuthLocalService } from './authentification/services/auth-local.service';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AppUserClientsModule,
    AuthentificationModule
  ],
  providers: [
    AuthLocalService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
