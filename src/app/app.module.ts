import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
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
    TaxContentComponent
  ],
  providers: [CommonService, WorkingClientService, WorkingTaxReturnService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
