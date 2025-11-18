import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConsultaService } from '../../services/consulta.service'; // observe nome e caminho

@Component({
  selector: 'app-forms-consulta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms-consulta.html',
  styleUrls: ['./forms-consulta.css'],
})
export class FormsConsulta {

  consultaForm!: FormGroup;

  // Lista de profissionais
  profissionais = [
    'Dr. João Silva - Fisioterapeuta',
    'Dra. Maria Santos - Nutricionista',
    'Dr. Pedro Costa - Médico Esportivo',
    'Dra. Ana Oliveira - Psicóloga Esportiva',
    'Dr. Carlos Mendes - Ortopedista'
  ];

  // Lista de sintomas
  sintomasDisponiveis = [
    { valor: 'Dor', label: 'Dor' },
    { valor: 'Inflamação', label: 'Inflamação' },
    { valor: 'Fraqueza', label: 'Fraqueza' },
    { valor: 'Mobilidade reduzida', label: 'Mobilidade reduzida' }
  ];

  constructor(private fb: FormBuilder, private consultaService: ConsultaService) {
    this.consultaForm = this.fb.group({

      identificacao: this.fb.group({
        dataConsulta: ['', Validators.required],
        profissional: ['', Validators.required],
        especialidade: [''],
        tipoConsulta: [''],
      }),

      motivoConsulta: this.fb.group({
        queixaPrincipal: ['', Validators.required],
        sintomas: [[]],
        quandoComecou: [''],
        intensidade: [''],
        frequencia: [''],
      }),

      historicoEsportivo: this.fb.group({
        esporte: [''],
        frequenciaTreino: [''],
        nivel: [''],
        mudancasTreino: [false],
        eventoProximo: [false],
      }),

      historicoClinico: this.fb.group({
        lesoes: [''],
        doencas: [''],
        medicacoes: [''],
        alergias: [''],
        cirurgias: [''],
      }),

      avaliacao: this.fb.group({
        exameFisico: [''],

        sinaisVitais: this.fb.group({
          fc: [''],
          pressao: [''],
          peso: [''],
          altura: [''],
          imc: [{ value: '', disabled: true }]
        }),

        amplitudeMovimento: [''],
        testeFuncional: [''],
        observacoes: [''],
      }),
    });

    // Calcular IMC automaticamente
    this.consultaForm.get('avaliacao.sinaisVitais.peso')?.valueChanges.subscribe(() => this.calcularIMC());
    this.consultaForm.get('avaliacao.sinaisVitais.altura')?.valueChanges.subscribe(() => this.calcularIMC());
  }

  calcularIMC() {
    const peso = Number(this.consultaForm.get('avaliacao.sinaisVitais.peso')?.value) || 0;
    const altura = Number(this.consultaForm.get('avaliacao.sinaisVitais.altura')?.value) || 0;

    if (peso > 0 && altura > 0) {
      const imc = peso / (altura * altura);
      this.consultaForm.get('avaliacao.sinaisVitais.imc')?.setValue(imc.toFixed(2), { emitEvent: false });
    } else {
      this.consultaForm.get('avaliacao.sinaisVitais.imc')?.setValue('');
    }
  }

  // Gerenciar seleção de sintomas via checkbox
  onSintomaChange(event: any, sintoma: string) {
    const sintomasArray: string[] = this.consultaForm.get('motivoConsulta.sintomas')?.value || [];

    if (event.target.checked) {
      if (!sintomasArray.includes(sintoma)) {
        sintomasArray.push(sintoma);
      }
    } else {
      const index = sintomasArray.indexOf(sintoma);
      if (index > -1) sintomasArray.splice(index, 1);
    }

    this.consultaForm.get('motivoConsulta.sintomas')?.setValue(sintomasArray);
  }

  // Verificar se um sintoma está selecionado
  isSintomaSelecionado(sintoma: string): boolean {
    const sintomasArray: string[] = this.consultaForm.get('motivoConsulta.sintomas')?.value || [];
    return sintomasArray.includes(sintoma);
  }

  salvar() {
    const dados = this.consultaForm.getRawValue(); // inclui IMC desabilitado
    this.consultaService.salvarConsulta(dados);
    alert('Consulta salva com sucesso!');
    this.consultaForm.reset();
  }
}
