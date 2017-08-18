import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { NewClientComponent } from './new-client.component';
import { ClientListComponent } from './client-list.component';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'landing-page',
  styleUrls: ['./templates/landing-page.component.css'],
  templateUrl: './templates/landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  @ViewChild(NewClientComponent) newClientComponent: NewClientComponent;
  @ViewChild(ClientListComponent) clientListComponent: ClientListComponent;
  @Input() name: string;
  user: User;

  constructor ( private commonService: CommonService ) {}

  ngOnInit(): void {
    this.user = this.commonService.getUser();
  }

  close(): void {
    this.newClientComponent.close();
  }

  open(): void {
    this.newClientComponent.open();
  }

  findClients(): void {
    let filter: object = {};
    filter['firstName'] = this.name;

    this.clientListComponent.findClients( filter );
  }
}
