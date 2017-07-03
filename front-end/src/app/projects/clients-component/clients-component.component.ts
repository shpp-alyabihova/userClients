import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserClientsServiceService } from '../services/user-clients-service.service';
import { AuthLocalService } from '../../authentification/services/auth-local.service';




@Component({
  selector: 'user-clients',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css']
})
export class ClientsComponentComponent implements OnInit {
  id: number;
  err: string;
  clients;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientsService: UserClientsServiceService,
    private authLocalService: AuthLocalService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('user id: ', this.id);
  }

  ngOnInit() {
    const token = this.authLocalService.getToken();
    this.clientsService.getUserClients(this.id, token)
      .subscribe(
        (res) => {
          this.clients = res.json().data;
        },
        (err) => {
          const error = err.json() && err.json().error.message;
          this.handleError(error);
        }
    );
  }

  private handleError(err: any) {
    this.err = err || 'Can not get response from server';
  }


}
