import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// Componentes de Dashboard
import { Info } from '../../components/athleteProfile/info/info';
import { Stats } from '../../components/athleteProfile/stats/stats';
import { CardCalorias } from '../../components/athleteProfile/card-calorias/card-calorias';
import { CardDisponibilidade } from '../../components/athleteProfile/card-disponibilidade/card-disponibilidade';
import { CardQueixas } from '../../components/athleteProfile/card-queixas/card-queixas';

// Modelo e Mock
import Athlete from '../../core/models/athlete.model';
import { ATHLETE_PROFILE_MOCK } from '../../mocks/athleteProfile.mock';

@Component({
  selector: 'app-athlete-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    Info,
    Stats,
    CardCalorias,
    CardDisponibilidade,
    CardQueixas
  ],
  templateUrl: './athlete-profile-page.html',
  styleUrls: ['./athlete-profile-page.css']
})
export class AthleteProfilePage implements OnInit {
  athleteId: string | null = null;
  athlete: Athlete = ATHLETE_PROFILE_MOCK;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Captura o ID do atleta da rota
    this.athleteId = this.route.snapshot.paramMap.get('id');
    
    // TODO: Aqui você pode buscar os dados do atleta específico
    // Por enquanto, usando o mock
    this.athlete = ATHLETE_PROFILE_MOCK;
  }

  // Navega para o formulário de nova consulta
  novaConsulta(): void {
    this.router.navigate(['/atletas', this.athleteId, 'consulta', 'forms']);
  }

  // Volta para a lista de atletas
  voltarParaLista(): void {
    this.router.navigate(['/atletas']);
  }
}

