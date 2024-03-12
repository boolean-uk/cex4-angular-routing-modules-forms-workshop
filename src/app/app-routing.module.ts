import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ViewUserComponent } from './users/view-user/view-user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users/new',
    component: CreateUserComponent,
  },
  {
    path: 'users/:userId',
    component: ViewUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
