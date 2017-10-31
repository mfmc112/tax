import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';
import { W2Component } from './w2.component';
import { W2FormsComponent } from './w2-forms.component';
import { Form1040Page1Component } from './form-1040-page1.component';
import { Form1040Page2Component } from './form-1040-page2.component';
import { Form1040Component } from './form-1040.component';
import { DependentsFormComponent } from './dependents-form.component';
import { DependentComponent } from './dependent.component';

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

export const w2FormsState = {
  name: 'menu.application.w2Forms',
  url: '/w2-forms',
  component: W2FormsComponent
};

export const w2State = {
  name: 'menu.application.w2Forms.w2',
  url: '/w2/:id',
  component: W2Component
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

export const dependentsFormState = {
  name: 'menu.application.dependentsForm',
  url: '/dependents-form',
  component: DependentsFormComponent
};

export const dependentState = {
  name: 'menu.application.dependentsForm.dependent',
  url: '/dependent/:id',
  component: DependentComponent
};

export const APPLICATION_FORMS_STATES = [
  personalInfoState,
  filingInfoState,
  w2State,
  w2FormsState,
  form1040State,
  form1040Page1State,
  form1040Page2State,
  dependentsFormState,
  dependentState
];
