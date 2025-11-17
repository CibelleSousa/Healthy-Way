import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import {ATHLETE_PROFILE_MOCK} from '../../../mocks/athleteProfile.mock'

@Component({
  selector: 'app-card-disponibilidade',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './card-disponibilidade.html',
  styleUrl: './card-disponibilidade.css',
})
export class CardDisponibilidade {

// pega availability com non-null assertion / fallback
  availability = ATHLETE_PROFILE_MOCK.availabilityLast30Days ?? {
    fitPercentage: undefined,
    fitDays: 0,
    restrictedDays: 0,
    injuredDays: 0
  };

  // dados do chart (usamos dias)
  data = {
    labels: ['Apto', 'Restrito', 'Lesionado'],
    datasets: [
      {
        data: [
          this.availability.fitDays ?? 0,
          this.availability.restrictedDays ?? 0,
          this.availability.injuredDays ?? 0
        ],
        backgroundColor: ['#962DFF', '#C893FD', '#E0C6FD'],
        hoverBackgroundColor: ['#962DFF', '#C893FD', '#E0C6FD']
      }
    ]
  };

  options = {
    cutout: '65%',
    plugins: { legend: { display: false } },
    responsive: false,
    maintainAspectRatio: false
  };

  // retorna a porcentagem a mostrar: prioriza fitPercentage, senão calcula pelos dias
  get centerPercent(): number {
    const explicit = this.availability.fitPercentage;
    if (typeof explicit === 'number' && !Number.isNaN(explicit)) {
      return Math.round(explicit);
    }

    const fit = this.availability.fitDays ?? 0;
    const rest = this.availability.restrictedDays ?? 0;
    const inj = this.availability.injuredDays ?? 0;
    const total = fit + rest + inj;
    if (total === 0) return 0;
    return Math.round((fit / total) * 100);
  }

  // rótulo central
  get centerLabel(): string {
    return 'APTO';
  }


}