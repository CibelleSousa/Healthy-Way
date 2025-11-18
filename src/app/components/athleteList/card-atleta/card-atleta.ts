import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import Athlete from '../../../core/models/athlete.model';
import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';

@Component({
  selector: 'app-card-atleta',
  imports: [],
  templateUrl: './card-atleta.html',
  styleUrl: './card-atleta.css'
})
export class CardAtleta {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;

  constructor(private router: Router) {}

  onCardClick() {
    // Navega para o perfil do atleta usando o ID
    this.router.navigate(['/atletas', this.Atleta.id]);
  }
}
