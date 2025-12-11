import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface CardResumo {
  titulo: string;
  valor: number;
  icone: string;
  cor: string;
  rota?: string;
}

export interface ConsultaDia {
  id: number;
  atleta: string;
  horario: string;
  profissional: string;
  status: 'agendada' | 'confirmada' | 'em-andamento' | 'concluida';
}

export interface Notificacao {
  id: number;
  tipo: 'info' | 'alerta' | 'sucesso';
  mensagem: string;
  tempo: string;
}

export interface DashboardData {
  nomeProfissional: string;
  ultimoAcesso: string;
  cardsResumo: CardResumo[];
  consultasDia: ConsultaDia[];
  notificacoes: Notificacao[];
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getDashboardData(): Observable<DashboardData> {
    // Tenta buscar do backend, se falhar usa dados mockados
    return this.http.get<DashboardData>(this.apiUrl).pipe(
      catchError(() => {
        console.warn('Backend não disponível, usando dados mockados');
        return of(this.getMockData());
      })
    );
  }

  getCardsResumo(): Observable<CardResumo[]> {
    return this.http.get<CardResumo[]>(`${this.apiUrl}/resumo`).pipe(
      catchError(() => of(this.getMockData().cardsResumo))
    );
  }

  getConsultasDia(): Observable<ConsultaDia[]> {
    return this.http.get<ConsultaDia[]>(`${this.apiUrl}/consultas`).pipe(
      catchError(() => of(this.getMockData().consultasDia))
    );
  }

  getNotificacoes(): Observable<Notificacao[]> {
    return this.http.get<Notificacao[]>(`${this.apiUrl}/notificacoes`).pipe(
      catchError(() => of(this.getMockData().notificacoes))
    );
  }

  private getMockData(): DashboardData {
    return {
      nomeProfissional: 'Dr. João Silva',
      ultimoAcesso: new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      cardsResumo: [
        { titulo: 'Consultas Hoje', valor: 8, icone: 'fa-solid fa-calendar-day', cor: '#962DFF', rota: '' },
        { titulo: 'Pendentes', valor: 3, icone: 'fa-solid fa-clock', cor: '#F59E0B', rota: '' },
        { titulo: 'Alertas', valor: 2, icone: 'fa-solid fa-triangle-exclamation', cor: '#EF4444', rota: '' },
        { titulo: 'Novos Atletas', valor: 5, icone: 'fa-solid fa-user-plus', cor: '#10B981', rota: '/atletas' }
      ],
      consultasDia: [
        { id: 1, atleta: 'Carlos Silva', horario: '08:00', profissional: 'Dr. João Silva', status: 'confirmada' },
        { id: 2, atleta: 'Ana Santos', horario: '09:30', profissional: 'Dr. João Silva', status: 'agendada' },
        { id: 3, atleta: 'Pedro Costa', horario: '10:00', profissional: 'Dra. Maria Oliveira', status: 'em-andamento' },
        { id: 4, atleta: 'Julia Ferreira', horario: '11:00', profissional: 'Dr. João Silva', status: 'agendada' },
        { id: 5, atleta: 'Roberto Lima', horario: '14:00', profissional: 'Dr. João Silva', status: 'confirmada' },
        { id: 6, atleta: 'Fernanda Souza', horario: '15:30', profissional: 'Dra. Maria Oliveira', status: 'concluida' }
      ],
      notificacoes: [
        { id: 1, tipo: 'alerta', mensagem: 'Consulta de Carlos Silva confirmada para hoje às 08:00', tempo: 'Há 5 min' },
        { id: 2, tipo: 'info', mensagem: 'Novo atleta cadastrado: Marcos Pereira', tempo: 'Há 15 min' },
        { id: 3, tipo: 'sucesso', mensagem: 'Relatório mensal gerado com sucesso', tempo: 'Há 1 hora' },
        { id: 4, tipo: 'alerta', mensagem: 'Lembrete: Consulta com Ana Santos às 09:30', tempo: 'Há 2 horas' },
        { id: 5, tipo: 'info', mensagem: 'Atualização de prontuário pendente para Pedro Costa', tempo: 'Há 3 horas' }
      ]
    };
  }
}

