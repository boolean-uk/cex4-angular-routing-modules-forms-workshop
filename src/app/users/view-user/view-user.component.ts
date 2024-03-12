import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USERS, User } from '../users';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent implements OnInit {
  userId: number = -1;
  user: User | null = null;
  userService: UsersService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    userService: UsersService
  ) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userId = parseInt(this.route.snapshot.paramMap.get('userId') || '-1');
    const user = this.userService.getUser(this.userId);
    if (user) {
      this.user = user;
    } else {
      // todo: redirect to somewhere...
      this.router.navigate(['/users']);
    }
  }
}
