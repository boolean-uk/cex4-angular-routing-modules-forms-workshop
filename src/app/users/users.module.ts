import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent, CreateUserComponent, ViewUserComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UsersListComponent, CreateUserComponent, ViewUserComponent],
})
export class UsersModule {}
