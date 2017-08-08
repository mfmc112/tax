import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonService } from '../common.service';
import { User } from '../login/user';

@Component({
  selector: 'menu-component',
  templateUrl: './templates/menu-component.html',
  styleUrls: ['./templates/menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  user: User;

  constructor ( private commonService: CommonService ) {}

  ngOnInit(): void {
    this.user = this.commonService.getUser();
  }
  // This will get called everytime when something changes on this app
  ngDoCheck() {
    this.user = this.commonService.getUser();
  }
}
