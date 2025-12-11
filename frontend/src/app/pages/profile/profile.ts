import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DadosProfissional {
  nome: string;
  email: string;
  telefone: string;
  especialidade: string;
  crm: string;
  dataNascimento: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  bio: string;
}

interface Estatistica {
  titulo: string;
  valor: number;
  icone: string;
  cor: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  // Modo de edição
  modoEdicao: boolean = false;

  // Dados do profissional
  profissional: DadosProfissional = {
    nome: 'Dr. João Silva',
    email: 'joao.silva@healthyway.com',
    telefone: '(11) 98765-4321',
    especialidade: 'Medicina Esportiva',
    crm: 'CRM/SP 123456',
    dataNascimento: '15/03/1985',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567',
    bio: 'Médico especialista em medicina esportiva com mais de 10 anos de experiência no acompanhamento de atletas de alto rendimento. Formado pela USP com especialização em traumatologia esportiva.'
  };

  // Cópia para edição
  profissionalEditado: DadosProfissional = { ...this.profissional };

  // Estatísticas do profissional
  estatisticas: Estatistica[] = [
    { titulo: 'Total de Atletas', valor: 45, icone: 'fa-solid fa-users', cor: '#962DFF' },
    { titulo: 'Consultas Realizadas', valor: 328, icone: 'fa-solid fa-calendar-check', cor: '#10B981' },
    { titulo: 'Anos de Experiência', valor: 10, icone: 'fa-solid fa-award', cor: '#F59E0B' },
    { titulo: 'Avaliação Média', valor: 4.8, icone: 'fa-solid fa-star', cor: '#EF4444' }
  ];

  // Especialidades
  especialidades: string[] = [
    'Medicina Esportiva',
    'Traumatologia Esportiva',
    'Reabilitação Física',
    'Nutrição Esportiva',
    'Cardiologia Esportiva'
  ];

  ativarEdicao(): void {
    this.modoEdicao = true;
    this.profissionalEditado = { ...this.profissional };
  }

  cancelarEdicao(): void {
    this.modoEdicao = false;
    this.profissionalEditado = { ...this.profissional };
  }

  salvarPerfil(): void {
    this.profissional = { ...this.profissionalEditado };
    this.modoEdicao = false;
    console.log('Perfil salvo:', this.profissional);
    alert('Perfil atualizado com sucesso!');
  }

  alterarFoto(): void {
    alert('Funcionalidade de upload de foto será implementada.');
  }
}
