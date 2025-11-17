import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
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
    { icon: 'fa-solid fa-house', label: 'Home', route: '/home' },
    { icon: 'fa-solid fa-user', label: 'Perfil', route: '/perfil' },
    { icon: 'fa-solid fa-clipboard', label: 'Atletas', route: '/atletas' },
    { icon: 'fa-solid fa-gear', label: 'Configurações', route: '/configuracoes' }
  ];
}