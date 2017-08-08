import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'landing-page',
  styleUrls: ['./templates/landing-page.component.css'],
  templateUrl: './templates/landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  user: User;

  constructor ( private commonService: CommonService ) {}

  ngOnInit(): void {
    this.user = this.commonService.getUser();
  }
}
