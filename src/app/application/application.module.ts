import { NgModule } from "@angular/core";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared.module";
import { APPLICATION_STATES } from "./application.states";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { SidebarModule } from 'ng-sidebar';
import { ApplicationFormsModule } from '../application-forms/application-forms.module'
import { ValidateCssDirective } from '../common/validate-css.directive';
import { ApplicationComponent } from './application.component';
import { ApplicationHeaderComponent } from './application-header.component';
import { AddFormComponent } from './add-form.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ToastModule.forRoot(),
    SidebarModule.forRoot(),
    SharedModule,
    UIRouterModule.forChild({ states: APPLICATION_STATES }),
    ApplicationFormsModule
  ],
  declarations: [
    ValidateCssDirective,
    ApplicationComponent,
    ApplicationHeaderComponent,
    AddFormComponent
  ]
})
export class ApplicationModule { }
