import { Component } from '@angular/core';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { Client } from '../common/client';
import { TaxReturn } from '../common/tax-return';
import { WorkingClientService } from '../working-client.service';
import { WorkingTaxReturnService } from '../working-tax-return.service';
import { ClientApiService } from '../client/client-api.service';

@Component({
  selector:'client-list',
  styleUrls: ['./templates/client-list.component.css'],
  templateUrl: './templates/client-list.component.html'
})
export class ClientListComponent {

  public clientList: Client[];

  constructor(
    private _uiRouter: UIRouter,
    private workingClientService: WorkingClientService,
    private workingTaxReturnService: WorkingTaxReturnService,
    private clientApiService: ClientApiService
   ) {
   this.findClients({});
 }

  openApplication():void {
    let client: Client = new Client();
    client.setFirstName('Kristy');
    client.setMiddleName('L');
    client.setLastName('Campbell');
    this.workingClientService.setClient(client);

    let taxReturn: TaxReturn = new TaxReturn();
    taxReturn.setEstimate(2500);
    taxReturn.setCurrentAGI(24858);
    this.workingTaxReturnService.setTaxReturn(taxReturn);
    this._uiRouter.stateService.go('menu.application')
  }

  findClients(filter: object) : void {
    if (!filter) filter = {};
    this.clientApiService.findByFilter(filter).subscribe(data => this.clientList = data);
  }

}
