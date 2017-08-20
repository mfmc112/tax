import { Injectable } from '@angular/core';
import { Application } from '../../common/Application';
import { Client } from '../../common/Client';
import { User } from '../../common/User';

@Injectable()
export class CurrentApplicationService {

  private application: Application;

  getApplication(): Application {
    return this.application;
  }

  setApplication(application: Application): void {
    this.application = application;
  }

  getClient(): Client {
    return this.application.client;
  }

  getPreparer(): User {
    return this.application.preparer;
  }
}
