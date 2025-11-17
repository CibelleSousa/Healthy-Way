import { Component } from '@angular/core';
import { CardAtleta } from '../card-atleta/card-atleta';
import { ATHLETE_LIST_MOCK } from '../../../mocks/athleteList.mock';

@Component({
  selector: 'app-card-list',
  imports: [CardAtleta],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
  athlete = ATHLETE_LIST_MOCK;
}
