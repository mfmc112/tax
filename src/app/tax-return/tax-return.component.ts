import { Component, OnInit } from '@angular/core';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';

@Component({
  selector: 'main-tax-return',
  templateUrl: './templates/tax-return.component.html',
  styleUrls: ['./templates/tax-return.component.css']
})
export class TaxReturnComponent implements OnInit {

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
