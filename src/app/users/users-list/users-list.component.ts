import { Component } from '@angular/core';
import { USERS, User } from '../users';
import { UsersService } from '../../users.service';

type DisplayUser = User & {
  viewUrl: string;
};

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
})
export class UsersListComponent {
  userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }
  // users: DisplayUser[] = USERS.map((user: User) => {
  //   ...user,
  //   viewUrl: `/users/${user.id}`
  // });
}
