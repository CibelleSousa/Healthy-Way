import { Component, Input } from '@angular/core';
import { CardCalorias } from '../../components/athleteProfile/card-calorias/card-calorias';
import { CardDisponibilidade } from '../../components/athleteProfile/card-disponibilidade/card-disponibilidade';
import { CardQueixas } from '../../components/athleteProfile/card-queixas/card-queixas';
import { AbasNavegacaoComponent } from '../../components/abas-navegacao/abas-navegacao';
import { Stats } from '../../components/athleteProfile/stats/stats';
import Athlete from '../../core/models/athlete.model';
import { ATHLETE_PROFILE_MOCK } from '../../mocks/athleteProfile.mock';
import { CardAtleta } from "../../components/athleteList/card-atleta/card-atleta";
import { Info } from "../../components/athleteProfile/info/info";
import { CdkAriaLive } from '@angular/cdk/a11y';
import { AthleteService } from '../../core/services/athlete';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-athlete-profile',
  imports: [CardCalorias, CardDisponibilidade, CardQueixas, AbasNavegacaoComponent, Stats, Info, RouterLink, RouterLinkActive],
  templateUrl: './athlete-profile.html',
  styleUrl: './athlete-profile.css',
})
export class AthleteProfile {
  @Input() atleta: Athlete = ATHLETE_PROFILE_MOCK;
  
  constructor(private atlheteService: AthleteService) {}

  handleClick(): void{
    window.alert("Apagando Atleta: "  + this.atleta.id);
    this.atlheteService.deleteAthleteById(this.atleta.id).subscribe();
  }
}
