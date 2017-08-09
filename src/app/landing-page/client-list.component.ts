import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';

@Component({
  selector:'client-list',
  styleUrls: ['./templates/client-list.component.css'],
  templateUrl: './templates/client-list.component.html'
})
export class ClientListComponent {

  constructor(
    private router: Router,
    private workingClientService: WorkingClientService,
    private workingTaxReturnService: WorkingTaxReturnService
   ) { }

  taxReturn():void {
    let client: Client = new Client();
    client.setFirstName('Kristy');
    client.setMiddleName('L');
    client.setLastName('Campbell');
    this.workingClientService.setClient(client);

    let taxReturn: TaxReturn = new TaxReturn();
    taxReturn.setEstimate(2500);
    taxReturn.setCurrentAGI(24858);
    this.workingTaxReturnService.setTaxReturn(taxReturn);

    this.router.navigate(['./tax-return']);
  }

}
