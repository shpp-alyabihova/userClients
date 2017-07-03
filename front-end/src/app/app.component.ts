import { Component } from '@angular/core';
import { AuthLocalService } from './authentification/services/auth-local.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public authLocalService: AuthLocalService) {

  }

  logout() {
    this.authLocalService.logoutUser();
  }
}
