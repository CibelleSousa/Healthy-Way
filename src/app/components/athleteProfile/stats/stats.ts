import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';
import Athlete from '../../../core/models/athlete.model';

@Component({
  selector: 'app-stats',
  imports: [ChartModule],
  templateUrl: './stats.html',
  styleUrl: './stats.css',
})

export class Stats implements OnInit {
  @Input() Atleta: Athlete = ATHLETE_PROFILE_MOCK;

  hydrationData: any;
  fatigueData: any;
  sleepData: any;

  radarData: any;
  radarOptions: any;

  doughnutOptions: any;

  ngOnInit(): void {
    // DONUT OPTIONS
    this.doughnutOptions = {
      cutout: '70%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      },
      maintainAspectRatio: false,
    };

    // DONUT DATA
    this.hydrationData = this.createDoughnut(this.Atleta.dailyStatus?.hydration);
    this.fatigueData   = this.createDoughnut(this.Atleta.dailyStatus?.muscleFatigue);
    this.sleepData     = this.createDoughnut(this.Atleta.dailyStatus?.sleep);

    // RADAR CHART
    this.radarData = {
      labels: [
        'Força',
        'Resistência',
        'Agilidade',
        'Potência',
        'Mobilidade',
        'Velocidade'
      ],
      datasets: [
        {
          label: 'Performance',
          data: [
            this.Atleta.performanceMetrics?.strength ?? 0,
            this.Atleta.performanceMetrics?.stamina ?? 0,
            this.Atleta.performanceMetrics?.agility ?? 0,
            this.Atleta.performanceMetrics?.power ?? 0,
            this.Atleta.performanceMetrics?.mobility ?? 0,
            this.Atleta.performanceMetrics?.speed ??0
          ],
          borderColor: '#C893FD',
          backgroundColor: 'rgba(200, 147, 253, 0.25)',
          borderWidth: 2,
          pointBackgroundColor: '#C893FD',
          pointBorderColor: '#C893FD',
          pointRadius: 4,
        }
      ]
    };

    this.radarOptions = {
      scales: {
        r: {
          min: 0,
          max: 100,
          grid: {
            color: '#959090ff', 
          },
          angleLines: {
            color: '#959090ff',
          },
          ticks: {
            display: false
          },
          pointLabels: {
            color: '#DBB2E5',
            font: {
              size: 14,
              weight: 'bold',
              family: 'Roboto'
            }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    };
  }

  private createDoughnut(value: number | undefined) {
    const val = value ?? 0;
    return {
      labels: ['Filled', 'Empty'],
      datasets: [
        {
          data: [val, 100 - val],
          backgroundColor: ['#962DFF', '#D9D9D9'],
          borderWidth: 0
        }
      ]
    };
  }
}