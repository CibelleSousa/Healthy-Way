import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface CardResumo {
  titulo: string;
  valor: number;
  icone: string;
  cor: string;
  rota?: string;
}

interface ConsultaDia {
  id: number;
  atleta: string;
  horario: string;
  profissional: string;
  status: 'agendada' | 'em-andamento' | 'concluida' | 'cancelada';
  statusLabel: string;
  atletaId: number;
}

interface Notificacao {
  id: number;
  tipo: 'info' | 'alerta' | 'sucesso';
  mensagem: string;
  tempo: string;
  icone: string;
}

@Component({
  selector: 'app-dashboard-profissional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-profissional.component.html',
  styleUrls: ['./dashboard-profissional.component.css']
})
export class DashboardProfissionalComponent {
  
  // Dados do profissional
  nomeProfissional = 'Dr. João Silva';
  ultimoAcesso = '18 de Novembro de 2025, 14:30';

  // Ações rápidas
  acoesRapidas = [
    { titulo: 'Nova Consulta', icone: 'fa-plus', rota: '/atletas/consulta/forms', cor: '#962DFF' },
    { titulo: 'Atletas', icone: 'fa-users', rota: '/atletas', cor: '#4ADE80' },
    { titulo: 'Consultas', icone: 'fa-calendar-check', rota: '/consultas', cor: '#FB923C' },
    { titulo: 'Relatórios', icone: 'fa-chart-line', rota: '/relatorios', cor: '#3B82F6' }
  ];

  // Cards de resumo
  cardsResumo: CardResumo[] = [
    { titulo: 'Consultas Hoje', valor: 8, icone: 'fa-calendar-day', cor: '#962DFF', rota: '/consultas' },
    { titulo: 'Pendentes', valor: 3, icone: 'fa-clock', cor: '#FB923C', rota: '/consultas?status=pendente' },
    { titulo: 'Alertas', valor: 2, icone: 'fa-triangle-exclamation', cor: '#EF4444', rota: '/alertas' },
    { titulo: 'Novos Atletas', valor: 5, icone: 'fa-user-plus', cor: '#4ADE80', rota: '/atletas?filtro=novos' }
  ];

  // Consultas do dia
  consultasDia: ConsultaDia[] = [
    { id: 1, atleta: 'Carlos Silva', horario: '09:00', profissional: 'Dr. João Silva', status: 'concluida', statusLabel: 'Concluída', atletaId: 1 },
    { id: 2, atleta: 'Maria Santos', horario: '10:30', profissional: 'Dr. João Silva', status: 'concluida', statusLabel: 'Concluída', atletaId: 2 },
    { id: 3, atleta: 'Pedro Costa', horario: '14:00', profissional: 'Dr. João Silva', status: 'em-andamento', statusLabel: 'Em Andamento', atletaId: 3 },
    { id: 4, atleta: 'Ana Oliveira', horario: '15:30', profissional: 'Dra. Maria Santos', status: 'agendada', statusLabel: 'Agendada', atletaId: 4 },
    { id: 5, atleta: 'Lucas Mendes', horario: '16:00', profissional: 'Dr. João Silva', status: 'agendada', statusLabel: 'Agendada', atletaId: 5 },
    { id: 6, atleta: 'Juliana Ferreira', horario: '17:00', profissional: 'Dr. João Silva', status: 'agendada', statusLabel: 'Agendada', atletaId: 6 }
  ];

  // Notificações recentes
  notificacoes: Notificacao[] = [
    { id: 1, tipo: 'alerta', mensagem: 'Carlos Silva reportou dor no joelho direito', tempo: 'Há 15 minutos', icone: 'fa-triangle-exclamation' },
    { id: 2, tipo: 'info', mensagem: 'Nova consulta agendada para Ana Oliveira às 15:30', tempo: 'Há 1 hora', icone: 'fa-calendar-plus' },
    { id: 3, tipo: 'sucesso', mensagem: 'Relatório mensal de Pedro Costa foi gerado', tempo: 'Há 2 horas', icone: 'fa-file-circle-check' },
    { id: 4, tipo: 'info', mensagem: 'Maria Santos atualizou seus dados de contato', tempo: 'Há 3 horas', icone: 'fa-user-pen' },
    { id: 5, tipo: 'alerta', mensagem: 'Lembrete: Revisão de protocolo de Lucas Mendes pendente', tempo: 'Há 4 horas', icone: 'fa-bell' }
  ];

  constructor(private router: Router) {}

  // Navegar para rota
  navegarPara(rota: string) {
    this.router.navigate([rota]);
  }

  // Abrir consulta
  abrirConsulta(consulta: ConsultaDia) {
    if (consulta.status === 'agendada') {
      this.router.navigate([`/atletas/${consulta.atletaId}/consulta/forms`]);
    } else if (consulta.status === 'em-andamento') {
      this.router.navigate([`/atletas/${consulta.atletaId}/consulta/forms`]);
    } else {
      this.router.navigate([`/atletas/${consulta.atletaId}`]);
    }
  }

  // Obter classe CSS do status
  getStatusClass(status: string): string {
    const classes: { [key: string]: string } = {
      'agendada': 'status-agendada',
      'em-andamento': 'status-em-andamento',
      'concluida': 'status-concluida',
      'cancelada': 'status-cancelada'
    };
    return classes[status] || '';
  }

  // Obter classe CSS da notificação
  getNotificacaoClass(tipo: string): string {
    const classes: { [key: string]: string } = {
      'info': 'notificacao-info',
      'alerta': 'notificacao-alerta',
      'sucesso': 'notificacao-sucesso'
    };
    return classes[tipo] || '';
  }

  // Obter texto do botão de ação
  getAcaoTexto(status: string): string {
    if (status === 'agendada') return 'Iniciar';
    if (status === 'em-andamento') return 'Continuar';
    return 'Visualizar';
  }
}

