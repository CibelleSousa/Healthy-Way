import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private consultas: any[] = [];

  constructor() {}

  salvarConsulta(dados: any) {
    this.consultas.push(dados);
    console.log('Consulta salva:', dados);
  }

  listarConsultas() {
    return this.consultas;
  }

  obterConsulta(index: number) {
    return this.consultas[index];
  }
}
