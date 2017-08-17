import { Component, ViewChild, OnInit } from '@angular/core';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';
import { ApplicationComponent } from '../application/application.component';

@Component({
  selector: 'tax-form',
  templateUrl: './templates/tax-return-form.component.html'
})
export class TaxReturnFormComponent implements OnInit {
  @ViewChild('../application/application.component') applicationComponent: ApplicationComponent;
  client: Client;
  taxReturn: TaxReturn;

  constructor(
    private workingClientService: WorkingClientService,
    private workingTaxReturnService: WorkingTaxReturnService
   ) { }

  ngOnInit(): void {
    this.client = this.workingClientService.getClient();
    this.taxReturn = this.workingTaxReturnService.getTaxReturn();
  }

}
