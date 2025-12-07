import { Component, OnInit } from '@angular/core';
import { SearchBar } from '../../components/general/search-bar/search-bar'; 
import { CardList } from '../../components/athleteList/card-list/card-list';
import { ATHLETE_LIST_MOCK } from '../../mocks/athleteList.mock';
import Athlete from '../../core/models/athlete.model';

@Component({
  selector: 'app-athletes',
  imports: [SearchBar, CardList],
  templateUrl: './athletes.html',
  styleUrl: './athletes.css',
})
export class Athletes {

  private allAthletes: Athlete[] = ATHLETE_LIST_MOCK;

  public filteredAthletes: Athlete[] = [];

  ngOnInit(): void {
    // Começa exibindo tudo
    this.filteredAthletes = this.allAthletes;
  }

  public onSearch(query: string): void {
    const term = query.toLowerCase().trim();
    this.filteredAthletes = this.allAthletes.filter(a => a.name.toLowerCase().includes(term))
  }
}
