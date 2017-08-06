import { Injectable } from '@angular/core';
import { User } from './login/user';

@Injectable()
export class CommonService {

  private user: User;

  getUser(): User {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }
}
