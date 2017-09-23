import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';
import { W2FormComponent } from './w2-form.component';
import { Form1040Page1Component } from './form-1040-page1.component';
import { Form1040Page2Component } from './form-1040-page2.component';
import { Form1040Component } from './form-1040.component';

export const personalInfoState = {
  name: 'menu.application.personalInfo',
  url: '/personal-info',
  component: PersonalInfoFormComponent
};

export const filingInfoState = {
  name: 'menu.application.filingInfo',
  url: '/filing-info',
  component: FilingInfoFormComponent
};

export const w2FormState = {
  name: 'menu.application.w2Form',
  url: '/w2/:id',
  component: W2FormComponent
};

export const form1040State = {
  name: 'menu.application.form1040',
  url: '/form-1040',
  component: Form1040Component
};

export const form1040Page1State = {
  name: 'menu.application.form1040.page1',
  url: '/form-1040-page1',
  component: Form1040Page1Component
};

export const form1040Page2State = {
  name: 'menu.application.form1040.page2',
  url: '/form-1040-page2',
  component: Form1040Page2Component
};

export const APPLICATION_FORMS_STATES = [
  personalInfoState,
  filingInfoState,
  w2FormState,
  form1040State,
  form1040Page1State,
  form1040Page2State
];
