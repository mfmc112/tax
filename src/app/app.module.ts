import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // NgModel lives here, Reactive is for validation
import { HttpClientModule } from '@angular/common/http';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { MyDatePickerModule } from 'mydatepicker';

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
import { CurrentApplicationService } from './application/service/current-application.service';
import { CalculateService } from './application/service/calculate.service';
import { CalculateHelperService } from './application/service/calculate-helper.service';
import { CalculateW2Service } from './application/service/forms/calculate-w2.service';
import { CalculateW2GService } from './application/service/forms/calculate-w2g.service';
import { FormulaService } from './application/service/formula.service';
import { WorkingClientService } from './working-client.service';
import { WorkingTaxReturnService } from './working-tax-return.service';

//Services
import { HttpClientService } from './common/http-client.service';
import { ZipCodeApiService } from './common/api/zip-code-api.service';
import { ClientApiService } from './client/client-api.service';
import { UserApiService } from './user/api/user-api.service';
import { ApplicationApiService } from './application/api/application-api.service';


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
      useHash: true,
      otherwise: { state: 'login' },
      config: routerConfigFn,
    }),
    MyDatePickerModule,
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
    CurrentApplicationService,
    CalculateService,
    CalculateHelperService,
    CalculateW2Service,
    CalculateW2GService,
    FormulaService,
    WorkingClientService,
    WorkingTaxReturnService,
    HttpClientModule,
    HttpClientService,
    ZipCodeApiService,
    ClientApiService,
    UserApiService,
    ApplicationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
