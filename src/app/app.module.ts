import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // NgModel lives here, Reactive is for validation
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { AppComponent } from './app.component';

import { MenuModule } from './menu/menu.module';
import { LoginModule } from './login/login.module';
import { LandingPageModule } from './landing-page/landing-page.module'

import { TaxReturnComponent } from './tax-return/tax-return.component';
import { TaxHeaderComponent } from './tax-return/tax-header.component';
import { TaxMenuComponent } from './tax-return/tax-menu.component';
import { TaxAreaComponent } from './tax-return/tax-area.component';
import { TaxContentComponent } from './tax-return/tax-content.component';

import { CommonService } from './common.service';
import { WorkingClientService } from './working-client.service';
import { WorkingTaxReturnService } from './working-tax-return.service';

//Services
import { ClientApiService } from './client/client-api.service';
import { HttpClientService } from './common/http-client.service';

import { APP_STATES } from './app.states';
import { routerConfigFn } from './router.config';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      otherwise: { state: 'login' },
      config: routerConfigFn,
    }),
    MenuModule,
    LoginModule,
    LandingPageModule
  ],
  declarations: [
    AppComponent,
    TaxReturnComponent,
    TaxHeaderComponent,
    TaxMenuComponent,
    TaxAreaComponent,
    TaxContentComponent
  ],
  providers: [
    CommonService,
    WorkingClientService,
    WorkingTaxReturnService,
    HttpClientModule,
    HttpClientService,
    ClientApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
