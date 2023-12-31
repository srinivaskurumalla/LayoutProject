import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ]
})
export class LayoutModule { }
