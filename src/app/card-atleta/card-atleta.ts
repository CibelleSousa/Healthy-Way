import { Component, Input } from '@angular/core';
import Athlete from "../core/models/athlete.model";
import { ATHLETE_PROFILE_MOCK } from '../mocks/athleteProfile.mock';

@Component({
  selector: 'app-card-atleta',
  imports: [],
  templateUrl: './card-atleta.html',
  styleUrl: './card-atleta.css'
})
export class CardAtleta {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;
  photoURL: string = this.Atleta.photoUrl;
  name: string = this.Atleta.name;
  age: number = this.Atleta.age;
  height: number = this.Atleta.height;
  weight: number = this.Atleta.weight;
  focus: string = this.Atleta.focus;
}
