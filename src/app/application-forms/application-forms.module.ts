import { NgModule } from "@angular/core";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared.module";
import { APPLICATION_FORMS_STATES } from "./application-forms.states";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
/* Add all the forms here */
import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ToastModule.forRoot(),
    SharedModule,
    UIRouterModule.forChild({ states: APPLICATION_FORMS_STATES })
  ],
  declarations: [
    PersonalInfoFormComponent,
    FilingInfoFormComponent
  ]
})
export class ApplicationFormsModule { }