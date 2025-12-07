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
}
