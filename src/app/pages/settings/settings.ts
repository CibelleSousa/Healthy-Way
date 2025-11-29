import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ConfiguracaoPerfil {
  nome: string;
  email: string;
  telefone: string;
  especialidade: string;
  crm: string;
  fotoUrl: string;
}

interface ConfiguracaoSistema {
  notificacoesEmail: boolean;
  notificacoesPush: boolean;
  notificacoesConsultas: boolean;
  idioma: string;
  tema: string;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {
  // Dados do perfil (mockados)
  perfil: ConfiguracaoPerfil = {
    nome: 'Dr. João Silva',
    email: 'joao.silva@healthyway.com',
    telefone: '(11) 98765-4321',
    especialidade: 'Medicina Esportiva',
    crm: 'CRM/SP 123456',
    fotoUrl: 'https://i.pravatar.cc/200?img=12'
  };

  // Configurações do sistema
  configuracoes: ConfiguracaoSistema = {
    notificacoesEmail: true,
    notificacoesPush: true,
    notificacoesConsultas: true,
    idioma: 'pt-BR',
    tema: 'escuro'
  };

  // Senhas (para demonstração)
  senhaAtual: string = '';
  novaSenha: string = '';
  confirmarSenha: string = '';

  // Controle de abas
  abaAtiva: string = 'perfil';

  // Versão do sistema
  versaoSistema: string = '1.0.0';

  selecionarAba(aba: string): void {
    this.abaAtiva = aba;
  }

  salvarPerfil(): void {
    console.log('Salvando perfil:', this.perfil);
    alert('Perfil atualizado com sucesso!');
  }

  salvarConfiguracoes(): void {
    console.log('Salvando configurações:', this.configuracoes);
    alert('Configurações salvas com sucesso!');
  }

  alterarSenha(): void {
    if (!this.senhaAtual || !this.novaSenha || !this.confirmarSenha) {
      alert('Por favor, preencha todos os campos de senha.');
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      alert('A nova senha e a confirmação não coincidem.');
      return;
    }

    if (this.novaSenha.length < 8) {
      alert('A nova senha deve ter pelo menos 8 caracteres.');
      return;
    }

    console.log('Alterando senha...');
    alert('Senha alterada com sucesso!');

    // Limpar campos
    this.senhaAtual = '';
    this.novaSenha = '';
    this.confirmarSenha = '';
  }

  selecionarFoto(): void {
    // Simular seleção de foto
    alert('Funcionalidade de upload de foto será implementada.');
  }
}
