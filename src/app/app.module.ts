import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // NgModel lives here, Reactive is for validation
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ClientListComponent } from './landing-page/client-list.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { TaxHeaderComponent } from './tax-return/tax-header.component';
import { TaxMenuComponent } from './tax-return/tax-menu.component';
import { TaxAreaComponent } from './tax-return/tax-area.component';
import { TaxContentComponent } from './tax-return/tax-content.component';
import { CommonService } from './common.service';
import { WorkingClientService } from './working-client.service';
import { WorkingTaxReturnService } from './working-tax-return.service';

// client
import { NewClientComponent } from './client/new-client.component';

//Services
import { ClientApiService } from './client/client-api.service';
import { HttpClientService } from './common/http-client.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2Bs3ModalModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    LoginComponent,
    ClientListComponent,
    TaxReturnComponent,
    TaxHeaderComponent,
    TaxMenuComponent,
    TaxAreaComponent,
    TaxContentComponent,
    NewClientComponent
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
