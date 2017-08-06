import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from './user';

@Component({
  selector: 'login-component',
  styleUrls: ['./templates/login.component.css'],
  templateUrl: './templates/login.component.html'
})
export class LoginComponent implements OnInit {
  @Input() user: User = new User();
  @Input() password: string;

  constructor (
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {

  }

  gotoLandingPage(): void {
    this.user.name = 'Marcos Costa';
    this.commonService.setUser( this.user );
    this.router.navigate(['/landing-page']);
  }
}
