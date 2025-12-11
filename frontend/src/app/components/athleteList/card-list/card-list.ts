import { Component, Input } from '@angular/core';
import { CardAtleta } from '../card-atleta/card-atleta';
import Athlete from '../../../core/models/athlete.model';
import { ATHLETE_LIST_MOCK } from '../../../mocks/athleteList.mock';
import { AddCard } from '../../add-card/add-card';

@Component({
  selector: 'app-card-list',
  imports: [CardAtleta, AddCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
    @Input() athletes: Athlete[] = [];
}
