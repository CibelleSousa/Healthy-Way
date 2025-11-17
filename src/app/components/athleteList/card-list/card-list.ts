import { Component, Input } from '@angular/core';
import { CardAtleta } from '../card-atleta/card-atleta';
import Athlete from '../../../core/models/athlete.model';
import { ATHLETE_LIST_MOCK } from '../../../mocks/athleteList.mock';

@Component({
  selector: 'app-card-list',
  imports: [CardAtleta],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
    @Input() athletes: Athlete[] = [];
}
