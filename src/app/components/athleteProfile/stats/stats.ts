import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {ATHLETE_PROFILE_MOCK} from '../../../mocks/athleteProfile.mock'
import { BodyComposition, DailyStatus, PerformanceMetrics } from '../../../core/models/healthData.model';
import Athlete from '../../../core/models/athlete.model';

@Component({
  selector: 'app-stats',
  imports: [ChartModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})
export class Stats {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;
}
