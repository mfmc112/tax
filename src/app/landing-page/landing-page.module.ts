import { NgModule } from "@angular/core";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared.module";
import { LANDING_PAGE_STATES } from "./landing-page.states";
import { LandingPageComponent } from "./landing-page.component";
import { ApplicationListComponent } from "./application-list.component";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ApplicationModule } from '../application/application.module';

import { NewClientComponent } from './new-client.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ToastModule.forRoot(),
    SharedModule,
    UIRouterModule.forChild({ states: LANDING_PAGE_STATES }),
    ApplicationModule
  ],
  declarations: [
    LandingPageComponent,
    ApplicationListComponent,
    NewClientComponent
  ]
})
export class LandingPageModule { }
