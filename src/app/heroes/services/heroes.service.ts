import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(`${environment.apiURL}/heroes`);
  }

  getHeroById(id: string): Observable<Heroe> {
    return this.httpClient.get<Heroe>(`${environment.apiURL}/heroes/${id}`);
  }

  getSuggestions(field: string): Observable<Heroe[]> {
    return this.httpClient.get<Heroe[]>(
      `${environment.apiURL}/heroes?q=${field}&_limit=6`
    );
  }
}
