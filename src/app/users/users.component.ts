import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../users-list';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    selectedUser: User;
    users: User[];

    onSelect(user: User): void {
        this.selectedUser = user;
    }

  constructor( private userService: UserService) { }

  ngOnInit() {
      this.getUsers();
  }

  getUsers(): void {
      this.users = this.userService.getUsers();
}
}
