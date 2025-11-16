import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// REMOVEMOS o MatListModule

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule], // <-- MatListModule FOI REMOVIDO DAQUI
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isExpanded = true;
  @HostBinding('class.expanded')
  get expanded() {
    return this.isExpanded;
  }

  navItems = [
    { icon: 'fa-solid fa-house', label: 'Home' },
    { icon: 'fa-solid fa-user', label: 'Perfil' },
    { icon: 'fa-solid fa-clipboard', label: 'Atletas' },
    { icon: 'fa-solid fa-gear', label: 'Configurações' }
  ];
}