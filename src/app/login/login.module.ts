import { NgModule } from "@angular/core";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared.module";
import { LOGIN_STATES } from "./login.states";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UIRouterModule.forChild({ states: LOGIN_STATES })
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
