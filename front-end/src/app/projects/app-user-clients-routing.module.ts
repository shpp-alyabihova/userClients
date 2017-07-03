
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ClientsComponentComponent } from './clients-component/clients-component.component';
import { AppUserClientsComponent } from './app-user-clients.component';
import { AuthGuard } from '../authentification/authGurd'


const appProjectsRoutes: Routes = [

  { path: '', component: AppUserClientsComponent, canActivate: [AuthGuard],
    children: [
/*
      { path: 'clients', component: ClientsComponentComponent, canActivate: [AuthGuard] },
*/
      { path: 'clients/:id', component: ClientsComponentComponent, canActivate: [AuthGuard] }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(appProjectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppUserClientsRoutingModule {}
