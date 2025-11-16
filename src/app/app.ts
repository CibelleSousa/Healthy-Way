import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAtleta } from './card-atleta/card-atleta';
import { CardDisponibilidade } from './components/general/card-disponibilidade/card-disponibilidade';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAtleta, CardDisponibilidade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthy-way');
}
