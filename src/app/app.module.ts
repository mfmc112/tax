import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ClientListComponent } from './landing-page/client-list.component';
import { TaxReturnComponent } from './tax-return/tax-return.component';
import { TaxHeaderComponent } from './tax-return/tax-header.component';

import { CommonService } from './common.service';
import { WorkingClientService } from './working-client.service';
import { WorkingTaxReturnService } from './working-tax-return.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    LandingPageComponent,
    LoginComponent,
    ClientListComponent,
    TaxReturnComponent,
    TaxHeaderComponent
  ],
  providers: [CommonService, WorkingClientService, WorkingTaxReturnService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
