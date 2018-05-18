import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './users-list';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    isLoggedIn: boolean;
    constructor() {
      this.isLoggedIn = false;
    }
    login() {}
    logout() {}
    getUsers(): User[] {
      return USERS;
    }
}
