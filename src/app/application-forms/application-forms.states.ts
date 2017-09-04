import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';
import { W2FormComponent } from './w2-form.component';
import { Form1040Page1Component } from './form-1040-page1.component';

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
  url: '/w2',
  component: W2FormComponent
};

export const form1040Page1State = {
  name: 'menu.application.form1040Page1',
  url: '/form-1040-page1',
  component: Form1040Page1Component
};

export const APPLICATION_FORMS_STATES = [
  personalInfoState,
  filingInfoState,
  w2FormState,
  form1040Page1State
];
