import { PersonalInfoFormComponent } from './personal-info-form.component';
import { FilingInfoFormComponent } from './filing-info-form.component';

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

export const APPLICATION_FORMS_STATES = [
  personalInfoState,
  filingInfoState
];
