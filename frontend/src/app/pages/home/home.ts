import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { DashboardService, CardResumo, ConsultaDia, Notificacao } from '../../services/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  // Dados do profissional
  nomeProfissional: string = 'Dr. João Silva';
  ultimoAcesso: string = 'Carregando...';

  // Ações rápidas
  acoesRapidas = [
    { titulo: 'Nova Consulta', icone: 'fa-solid fa-plus', rota: '' },
    { titulo: 'Atletas', icone: 'fa-solid fa-users', rota: '/atletas' },
    { titulo: 'Consultas', icone: 'fa-solid fa-calendar-check', rota: '' },
    { titulo: 'Relatórios', icone: 'fa-solid fa-chart-line', rota: '' }
  ];

  // Cards de resumo
  cardsResumo: CardResumo[] = [];

  // Consultas do dia
  consultasDia: ConsultaDia[] = [];

  // Notificações
  notificacoes: Notificacao[] = [];

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.carregarDadosDashboard();
  }

  carregarDadosDashboard(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.nomeProfissional = data.nomeProfissional;
        this.ultimoAcesso = data.ultimoAcesso;
        this.cardsResumo = data.cardsResumo;
        this.consultasDia = data.consultasDia;
        this.notificacoes = data.notificacoes;
        console.log('✅ Dados carregados do backend:', data);
      },
      error: (error) => {
        console.error('❌ Erro ao carregar dados do dashboard:', error);
      }
    });
  }

  navegarPara(rota: string): void {
    if (rota) {
      this.router.navigate([rota]);
    }
  }

  abrirConsulta(consultaId: number): void {
    console.log('Abrindo consulta:', consultaId);
    // Rota de consultas ainda não implementada
    alert(`Funcionalidade de visualizar consulta #${consultaId} será implementada em breve.`);
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  getNotificacaoClass(tipo: string): string {
    return `notificacao-${tipo}`;
  }

  getAcaoTexto(titulo: string): string {
    return titulo;
  }
}
