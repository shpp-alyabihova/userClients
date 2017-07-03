import { Component, OnInit } from '@angular/core';
import { AuthLocalService } from '../../authentification/services/auth-local.service';


import { UserClientsServiceService } from '../services/user-clients-service.service';


@Component({
  selector: 'users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit {

  users;


  constructor (private userService: UserClientsServiceService, private authLocalService: AuthLocalService) {
  }

  ngOnInit() {
    const token = this.authLocalService.getToken();
    this.userService.getUsers(token).subscribe(
      res => this.users = res.json().data,
      err => this.handleError(err)
    );
  }


  private handleError(err: any) {
    console.error('Error: ', err);
  }
}
