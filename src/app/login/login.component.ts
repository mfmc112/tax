import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { CommonService } from '../common.service';
import { User } from './user';
import { Alert } from './alert';

@Component({
  selector: 'login-component',
  styleUrls: ['./templates/login.component.css'],
  templateUrl: './templates/login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  @Input() user: User = new User();

  constructor (
    private _uiRouter: UIRouter,
    private formBuilder: FormBuilder,
    private commonService: CommonService
  ) {
    this.loginForm = formBuilder.group({
      'user.email' : ['', Validators.compose([Validators.required, Validators.maxLength(45)])],
      'user.password' : ['', Validators.compose([Validators.required, Validators.maxLength(45)])]
    });
  }

  ngOnInit(): void {

  }

  gotoLandingPage(fields: any):void {
    // client.setITIN(fields.ssnItin);
    this.user.name = 'Marcos Costa';
    this.user.alerts = [new Alert(), new Alert(), new Alert()];
    this.commonService.setUser( this.user );
    this._uiRouter.stateService.go('menu')
  }
}
