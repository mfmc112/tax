import { LandingPageComponent } from './landing-page.component';
import { ClientListComponent } from './client-list.component';
import { NewClientComponent } from './new-client.component';

export const landingPageState = {
  name: 'menu.landingPage',
  url: '/landing-page',
  component: LandingPageComponent
};

export const clientListState = {
  name: 'menu.landingPage.clientList',
  url: '/client-list',
  component: ClientListComponent
};

export const newClientState = {
  name: 'menu.newClient',
  url: '/new-client',
  component: NewClientComponent
};

export const LANDING_PAGE_STATES = [
  landingPageState,
  clientListState,
  newClientState
];
