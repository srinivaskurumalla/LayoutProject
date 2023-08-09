import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  @Output() sidebarToggleR = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleSidebarR() {
    this.sidebarToggleR.emit();
  }
  onLoginClick() {
    console.log('Login link clicked');
  }

}
