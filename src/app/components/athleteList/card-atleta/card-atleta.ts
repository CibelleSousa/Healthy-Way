import { Component, Input} from '@angular/core';
import Athlete from '../../../core/models/athlete.model';
import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-card-atleta',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './card-atleta.html',
  styleUrl: './card-atleta.css'
})
export class CardAtleta {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;
}
