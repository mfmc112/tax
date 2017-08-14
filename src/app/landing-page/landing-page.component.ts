import { Component, ViewChild, OnInit } from '@angular/core';
import { NewClientComponent } from '../client/new-client.component';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'landing-page',
  styleUrls: ['./templates/landing-page.component.css'],
  templateUrl: './templates/landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  @ViewChild(NewClientComponent) newClientComponent: NewClientComponent;
  user: User;

  constructor ( private commonService: CommonService ) {}

  close() {
    this.newClientComponent.close();
  }

  open() {
    this.newClientComponent.open();
  }

  ngOnInit(): void {
    this.user = this.commonService.getUser();
  }
}
