import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';

type FilterType = '6m' | '12m';

@Component({
  selector: 'app-card-calorias',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './card-calorias.html',
  styleUrls: ['./card-calorias.css']
})
export class CardCalorias implements OnInit {

  private rawData = ATHLETE_PROFILE_MOCK?.caloricIntakeHistory ?? [];

  filterOpen = false;
  selectedFilter: FilterType = '6m';

  chartData: any = { labels: [], datasets: [] };
  chartOptions: any = {};

  ngOnInit(): void {
    this.applyFilter(this.selectedFilter);
  }

  toggleFilterMenu() {
    this.filterOpen = !this.filterOpen;
  }

  applyFilter(filter: FilterType) {
    this.selectedFilter = filter;
    this.filterOpen = false;
    this.buildChartForFilter(filter);
  }

  private buildChartForFilter(filter: FilterType) {
    const needed = filter === '6m' ? 6 : 12;

    const slice = (this.rawData ?? []).slice(-needed);

    const labels = slice.map((d: any) => d.month ?? '');

    const proteina = slice.map((d: any) => Number(d.protein ?? 0));
    const carbo = slice.map((d: any) => Number(d.carbs ?? 0));
    const gorduras = slice.map((d: any) => Number(d.fats ?? 0));

    this.chartData = {
      labels,
      datasets: [
        {
          label: 'Proteína',
          data: proteina,
          backgroundColor: '#962DFF',
          stack: 'stack'
        },
        {
          label: 'Carboidratos',
          data: carbo,
          backgroundColor: '#C893FD',
          stack: 'stack'
        },
        {
          label: 'Gorduras',
          data: gorduras,
          backgroundColor: '#E0C6FD',
          stack: 'stack'
        }
      ]
    };

    this.chartOptions = {
      responsive: false,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: true,
          labels: { color: '#ffffffff', font: { family: 'Roboto', weight: '500' } }
        },

        tooltip: {
          enabled: false, // DESLIGA tooltip padrão

          external: (context: any) => {
            const { chart, tooltip } = context;

            let tooltipEl = chart.canvas.parentNode.querySelector('div.custom-tooltip');

            if (tooltip.opacity === 0) {
              if (tooltipEl) tooltipEl.style.opacity = '0';
              return;
            }

            // cria tooltip se não existir
            if (!tooltipEl) {
              tooltipEl = document.createElement('div');
              tooltipEl.classList.add('custom-tooltip');
              tooltipEl.style.position = 'absolute';
              tooltipEl.style.background = '#000000ff';
              tooltipEl.style.border = '1px solid #ccc';
              tooltipEl.style.borderRadius = '8px';
              tooltipEl.style.padding = '10px 12px';
              tooltipEl.style.pointerEvents = 'none';
              tooltipEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              tooltipEl.style.fontFamily = 'Roboto, sans-serif';
              tooltipEl.style.fontSize = '13px';
              chart.canvas.parentNode.appendChild(tooltipEl);
            }

            const index = tooltip.dataPoints[0].dataIndex;

            const p = chart.data.datasets[0].data[index] ?? 0;
            const c = chart.data.datasets[1].data[index] ?? 0;
            const g = chart.data.datasets[2].data[index] ?? 0;
            const total = p + c + g;

            tooltipEl.innerHTML = `
              <div><strong>${chart.data.labels[index]}</strong></div>
              <div>Gorduras: ${g} kcal</div>
              <div>Carboidratos: ${c} kcal</div>
              <div>Proteína: ${p} kcal</div>
              <div style="margin-top:4px; font-weight:700">Total: ${total} kcal</div>
            `;

            const { offsetLeft: left, offsetTop: top } = chart.canvas;

            tooltipEl.style.opacity = '1';
            tooltipEl.style.left = left + tooltip.caretX + 12 + 'px';
            tooltipEl.style.top = top + tooltip.caretY + 'px';
          }
        }
      },

      scales: {
        x: {
          stacked: true,
          ticks: { color: '#ffffffff', font: { family: 'Roboto', weight: '500' } },
          grid: { display: false }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: { color: '#ffffffff', font: { family: 'Roboto', weight: '500' } },
          grid: { color: '#E5E5EF'},
          border: {color: '#E5E5EF'}
        }
      }
    };
  }
}
