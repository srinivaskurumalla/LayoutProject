import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LayoutProject';
  isSidebarOpen = true; // Initial state of the sidebar
  isSidebarOpenR = true; // Initial state of the sidebar

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleSidebarR() {
    this.isSidebarOpenR = !this.isSidebarOpenR;
  }
}
