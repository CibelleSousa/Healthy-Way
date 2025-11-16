import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAtleta } from './card-atleta/card-atleta';
import { CardList } from './components/athleteList/card-list/card-list';
import { CardDisponibilidade } from './components/general/card-disponibilidade/card-disponibilidade';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAtleta, CardList, CardDisponibilidade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthy-way');
}
