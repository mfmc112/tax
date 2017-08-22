import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CommonService } from '../common.service';
import { UserApiService } from '../user/api/user-api.service';
import { User } from './user';
import { Alert } from './alert';

@Component({
  selector: 'login-component',
  styleUrls: ['./templates/login.component.css'],
  templateUrl: './templates/login.component.html'
})
export class LoginComponent implements OnInit {
  @Input() user: User = new User();
  loginForm: FormGroup;
  loginFail: boolean = false;

  constructor (
    private _uiRouter: UIRouter,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private userApiService: UserApiService
  ) {
    this.loginForm = formBuilder.group({
      'user.email' : ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
      'user.password' : ['', Validators.compose([Validators.required, Validators.maxLength(45)])]
    });
  }

  ngOnInit(): void {

  }

  gotoLandingPage(fields: any, form: any):void {
    this.userApiService.matchUser(fields["user.email"], fields["user.password"]).subscribe(response => {
      if (!response.users || response.users.length <= 0) {
        this.loginFail = true;
      } else {
        response.users[0].alerts = [new Alert(), new Alert(), new Alert()];
        this.commonService.setUser( response.users[0] );
        this._uiRouter.stateService.go('menu');
      }
    });
  }
}
