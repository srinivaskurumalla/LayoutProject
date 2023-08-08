import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClaimsComponent } from './claims/list-claims/list-claims.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'claims-list', component: ListClaimsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
