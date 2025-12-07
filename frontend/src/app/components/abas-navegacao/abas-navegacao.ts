import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abas-navegacao',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './abas-navegacao.html',
  styleUrls: ['./abas-navegacao.css']
})
export class AbasNavegacaoComponent {
  abas = signal<string[]>(['Saúde', 'Nutrição', 'Treinos']);
  abaAtiva = signal<string>('Saúde');

  selecionarAba(aba: string) {
    this.abaAtiva.set(aba);
  }
}
