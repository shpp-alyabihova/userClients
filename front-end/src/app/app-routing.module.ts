
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

import { UsersComponentComponent } from './projects/users-component/users.component';
import { AuthGuard } from './authentification/authGurd'


const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent, canActivate: [AuthGuard] },
  { path: 'clients', component: UsersComponentComponent, canActivate: [AuthGuard] },
  { loadChildren: './projects/app-user-clients.module#AppUserClientsModule', path: 'clients/:id'},
  { loadChildren: './authentification/authentification.module#AuthentificationModule', path: 'authentification'},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
