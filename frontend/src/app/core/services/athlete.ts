import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import Athlete from '../models/athlete.model';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  // A URL do seu Backend
  private apiUrl = 'http://localhost:8080/athletes';

  // Injetamos o HttpClient (a ferramenta de requisição)
  constructor(private http: HttpClient) { }

  // Método que vai lá no backend buscar a lista
  // Retorna um Observable (um fluxo de dados que podemos 'assinar')
  getAthletes(): Observable<Athlete[]> {
    return this.http.get<Athlete[]>(this.apiUrl);
  }

  getAthleteById(id: number): Observable<Athlete> {
    return this.http.get<Athlete>(`${this.apiUrl}/${id}`);
  }

  deleteAthleteById(id: number): Observable<Athlete>{
    return this.http.delete<Athlete>(`${this.apiUrl}/${id}`);
  }

  createAthlete(atleta: Athlete): Observable<Athlete>{
    return this.http.patch<Athlete>(`${this.apiUrl}/${atleta.id}`, atleta);
  }
  
  
}