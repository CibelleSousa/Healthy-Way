import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from './components/layout/header/header';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { CommonModule } from '@angular/common';
import { CardList } from "./components/athleteList/card-list/card-list";
import { AbasNavegacaoComponent } from "./components/abas-navegacao/abas-navegacao"; 
import { Info } from './components/athleteProfile/info/info';
import { CardDisponibilidade } from "./components/athleteProfile/card-disponibilidade/card-disponibilidade";
import { CardCalorias } from './components/athleteProfile/card-calorias/card-calorias';
import { CardQueixas } from './components/athleteProfile/card-queixas/card-queixas';
import { Stats } from "./components/athleteProfile/stats/stats";
import { CardAtleta } from './components/athleteList/card-atleta/card-atleta';
import { SearchBar } from './components/general/search-bar/search-bar';
import { AthleteProfile } from "./pages/athlete-profile/athlete-profile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatSidenavModule, Header, Sidebar, CardAtleta, CardList, AbasNavegacaoComponent, Info, CardDisponibilidade, Stats, CardCalorias, CardQueixas, SearchBar, AthleteProfile],
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
