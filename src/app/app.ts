import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAtleta } from './card-atleta/card-atleta';
import { CardList } from './components/athleteList/card-list/card-list';
import { CardDisponibilidade } from './components/athleteProfile/card-disponibilidade/card-disponibilidade';
import { CardCalorias } from './components/athleteProfile/card-calorias/card-calorias';
import { CardQueixas } from './components/athleteProfile/card-queixas/card-queixas';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAtleta, CardList, CardDisponibilidade,CardCalorias,CardQueixas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthy-way');
}
