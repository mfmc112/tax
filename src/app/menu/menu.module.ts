import {NgModule} from "@angular/core";
import {UIRouterModule, UIView} from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from "../shared.module";
import {MENU_STATES} from "./menu.states";
import {MenuComponent} from "./menu.component";

/** The Bar NgModule */
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UIRouterModule.forChild({ states: MENU_STATES })
  ],
  declarations: [
    MenuComponent
  ]
})
export class MenuModule { }
