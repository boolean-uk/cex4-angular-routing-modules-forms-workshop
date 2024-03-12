import { Injectable } from '@angular/core';
import { USERS, User } from './users/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = USERS;

  getUser(userId: number): User | undefined {
    return this.users.find((user) => user.id === userId);
  }

  createUser(name: string, email: string, password: string) {
    const newUser: User = {
      id: this.users.length + 1,
      name,
      email,
      password,
    };
    this.users.push(newUser);
  }
}
