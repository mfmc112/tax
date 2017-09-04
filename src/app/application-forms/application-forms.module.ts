import { NgModule } from "@angular/core";
import { UIRouterModule, UIView } from "@uirouter/angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../shared.module";
import { APPLICATION_FORMS_STATES } from "./application-forms.states";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';
import { W2FormComponent } from './w2-form.component';
import { Form1040Page1Component } from './form-1040-page1.component';
import { FormHeaderComponent } from './utils/form-header.component';
import { FormSubHeaderComponent } from './utils/form-sub-header.component';
import { MyDatePickerModule } from 'mydatepicker';
import { TextMaskModule } from 'angular2-text-mask';
import { NInputComponent, NTextareaComponent, NRadioComponent, NRadioListComponent, NCheckboxComponent } from '../common/n-components';
import { NW2Field12Component } from '../common/n-components/n-w2-field12.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    Ng2Bs3ModalModule,
    ToastModule.forRoot(),
    SharedModule,
    UIRouterModule.forChild({ states: APPLICATION_FORMS_STATES }),
    MyDatePickerModule,
    TextMaskModule
  ],
  declarations: [
    PersonalInfoFormComponent,
    FilingInfoFormComponent,
    W2FormComponent,
    Form1040Page1Component,
    NInputComponent,
    NTextareaComponent,
    NRadioComponent,
    NRadioListComponent,
    NCheckboxComponent,
    NW2Field12Component,
    FormHeaderComponent,
    FormSubHeaderComponent
  ]
})
export class ApplicationFormsModule { }
