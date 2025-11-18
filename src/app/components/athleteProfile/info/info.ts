import { CommonModule} from '@angular/common';
import { Component, Input} from '@angular/core';
import Athlete from '../../../core/models/athlete.model';
import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';

@Component({
  selector: 'app-info',
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;

  calculateIMC(): string {
    if (this.Atleta.weight && this.Atleta.height) {
      const heightInMeters = this.Atleta.height / 100;
      const imc = this.Atleta.weight / (heightInMeters * heightInMeters);
      return imc.toFixed(1);
    }
    return 'N/A';
  }
}
