import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClaimsComponent } from './list-claims/list-claims.component';



@NgModule({
  declarations: [
    ListClaimsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [ListClaimsComponent]
})
export class ClaimsModule { }
