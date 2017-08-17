import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { ApplicationComponent } from './application/application.component';


//Forms
import { TaxReturnFormComponent } from './tax-return-forms/tax-return-form.component';
import { PersonalInfoFormComponent } from './tax-return-forms/personal-info-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'tax-return', component: TaxReturnComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'personal-info', component: PersonalInfoFormComponent },
  {
        path: 'forms',
        component: TaxReturnFormComponent,
        children : [
            { path: 'personal-info', component: PersonalInfoFormComponent }
        ]
    },
  { path: 'personal-info', component: PersonalInfoFormComponent, outlet:'taxForms'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
