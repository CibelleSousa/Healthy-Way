import { Component, signal } from '@angular/core';
import { Header } from '../../components/layout/header/header';
import { Sidebar } from '../../components/layout/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { CardList } from "../../components/athleteList/card-list/card-list";
import { CardQueixas } from "../../components/athleteProfile/card-queixas/card-queixas";

@Component({
  selector: 'app-athletes',
  imports: [Header, Sidebar, MatSidenavModule, CardList, RouterOutlet, CardQueixas],
  templateUrl: './athletes.html',
  styleUrl: './athletes.css',
})
export class Athletes {
    public isSidebarExpanded = false;
    toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
