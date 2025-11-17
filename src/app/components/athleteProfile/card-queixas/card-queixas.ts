import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ATHLETE_PROFILE_MOCK } from '../../../mocks/athleteProfile.mock';

interface Queixa {
  data: string;
  texto: string;
  status: 'solucionada' | 'pendente' | 'a_revisar';
}

@Component({
  selector: 'app-card-queixas',
  imports: [CommonModule],
  templateUrl: './card-queixas.html',
  styleUrl: './card-queixas.css',
  standalone: true
})
export class CardQueixas {

  queixas: Queixa[] = [];

  constructor() {
    this.queixas = this.mapMockToQueixas();
  }

  /** Converte mockComplaints → formato esperado pelo componente */
  private mapMockToQueixas(): Queixa[] {
    return (ATHLETE_PROFILE_MOCK.complaintHistory ?? []).map(c => ({
      data: c.date,
      texto: c.complaint,
      status: this.mapStatus(c.status)
    }));
  }

  /** Converte os textos do mock para o enum local */
  private mapStatus(status: string): Queixa['status'] {
    const normalized = status.toLowerCase();

    if (normalized.includes('solucionada')) return 'solucionada';
    if (normalized.includes('pendente')) return 'pendente';
    if (normalized.includes('revisar')) return 'a_revisar';

    return 'pendente'; // fallback seguro
  }

  getStatus(status: Queixa['status']) {
    return {
      solucionada: 'Solucionada',
      pendente: 'Pendente',
      a_revisar: 'A revisar'
    }[status];
  }
}
