import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import Athlete from '../../core/models/athlete.model';
import { AthleteService } from '../../core/services/athlete';
import { BidiModule } from "@angular/cdk/bidi";
import { ATHLETE_PROFILE_MOCK } from '../../mocks/athleteProfile.mock';

type levelType = 'Sênior' | 'Júnior'
type statusType = 'Ok' | 'Lesionado' | 'Restringido'

@Component({
  selector: 'app-create-athlete',
  imports: [BidiModule],
  templateUrl: './create-athlete.html',
  styleUrl: './create-athlete.css',
})
export class CreateAthlete {

  constructor(private athleteService: AthleteService) {}

  id: number = 0;
  name: string = '';
  photoUrl: string = '';
  age: number = 0;
  weight: number = 0;
  height: number = 0;
  focus: string = '';
  gender: string = '';
  level: levelType = 'Sênior';
  status: statusType = 'Ok';
  medicalConditions: string[] = [];
  atleta: Athlete = { id:this.id,
                      photoUrl: ATHLETE_PROFILE_MOCK.photoUrl, 
                      name:this.name,
                      age:this.age,
                      weight:this.age,
                      height:this.height,
                      focus:this.focus,
                      gender:this.gender,
                      level:this.level,
                      status: this.status,
                      medicalConditions: this.medicalConditions}

  submit(): void {
    window.alert("Atleta Criado com Sucesso");
    this.athleteService.createAthlete(this.atleta).subscribe();
  }
  

}
