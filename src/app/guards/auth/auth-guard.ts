import { Injectable, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { Observable, of } from 'rxjs';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {

  constructor() { }
  canLoad() {
    return this.authenticate;
  }
  authenticate: boolean = false;
  accounts: any[] = [
    { accountUsername: 'superadmin', accountPassword: 'superadmin' },
    { accountUsername: 'admin', accountPassword: 'admin' },
    { accountUsername: 'user1', accountPassword: 'user1' },
  ];

  checkaccount(username: string, password: string) {
    this.authenticate = this.accounts.some(
      (account) =>
        account.accountUsername === username &&
        account.accountPassword === password
    );
  }
}

 
