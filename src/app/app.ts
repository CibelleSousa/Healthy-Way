import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardAtleta } from './card-atleta/card-atleta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardAtleta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthy-way');
}
