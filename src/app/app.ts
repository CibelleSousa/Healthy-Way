import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CardAtleta } from './card-atleta/card-atleta';
import { Header } from './components/layout/header/header';
import { Sidebar } from './components/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatSidenavModule, Header, Sidebar, CardAtleta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthy-way');
  public isSidebarExpanded = false;
  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
