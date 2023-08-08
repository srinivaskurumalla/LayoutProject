import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import { ClaimsModule } from './claims/claims.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    LayoutModule,
    UsersModule,
    ClaimsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
