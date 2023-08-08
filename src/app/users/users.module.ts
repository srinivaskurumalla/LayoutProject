import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUsersComponent,
    LoginComponent
  ]
})
export class UsersModule { }
