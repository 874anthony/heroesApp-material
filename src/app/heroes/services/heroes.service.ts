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

  addHero(heroe: Heroe): Observable<Heroe> {
    return this.httpClient.post<Heroe>(`${environment.apiURL}/heroes`, heroe);
  }

  updateHero(heroe: Heroe): Observable<Heroe> {
    return this.httpClient.put<Heroe>(
      `${environment.apiURL}/heroes/${heroe.id}`,
      heroe
    );
  }

  deleteHero(id: string): Observable<{}> {
    return this.httpClient.delete<{}>(`${environment.apiURL}/heroes/${id}`);
  }
}
