import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';
import { W2FormComponent } from './w2-form.component';

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

export const APPLICATION_FORMS_STATES = [
  personalInfoState,
  filingInfoState,
  w2FormState
];
