import { Component, Input, OnInit } from '@angular/core';
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
  ngOnInit(): void{
  }
}
