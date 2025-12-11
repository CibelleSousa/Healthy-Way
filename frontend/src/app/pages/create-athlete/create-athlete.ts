import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import Athlete from '../../core/models/athlete.model';
import { AthleteService } from '../../core/services/athlete';
import { BidiModule } from "@angular/cdk/bidi";
import { ATHLETE_PROFILE_MOCK } from '../../mocks/athleteProfile.mock';
import { RouterLink, RouterLinkActive } from "@angular/router";
import AthleteBd from '../../core/models/athlete.modelBD';
import { ATHLETE_PROFILE_MOCK_BD } from '../../mocks/athleteProfileBd.mock';

type levelType = 'Sênior' | 'Júnior'
type statusType = 'Ok' | 'Lesionado' | 'Restringido'

@Component({
  selector: 'app-create-athlete',
  imports: [BidiModule, RouterLink],
  templateUrl: './create-athlete.html',
  styleUrl: './create-athlete.css',
})
export class CreateAthlete {

  private allAthletes: Athlete[] = [];
  constructor(private athleteService: AthleteService) {};

  atleta: AthleteBd = ATHLETE_PROFILE_MOCK_BD;
  ngOnInit(): void {
    this.athleteService.getAthletes().subscribe({
      next: (dadosDoBackend) => {
        this.allAthletes = dadosDoBackend;
      }
    })
  }

  submit(): void {
    /*this.atleta.id = this.allAthletes[this.allAthletes.length - 1].id + 1;*/
    window.alert("Atleta Criado com Sucesso");
    console.log(this.atleta)
    this.athleteService.createAthlete(this.atleta).subscribe();
    
  }
  

}
