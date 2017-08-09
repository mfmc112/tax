import { Injectable } from '@angular/core';
import { Client } from './common/client';

@Injectable()
export class WorkingClientService {

  private client: Client;

  getClient(): Client {
    return this.client;
  }

  setClient(client: Client): void {
    this.client = client;
  }
}
