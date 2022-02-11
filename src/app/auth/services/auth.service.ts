import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthI } from '../interfaces/auth.interface';
import { Observable, tap, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: AuthI | undefined;

  constructor(private _http: HttpClient) {}

  verifyAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this._http.get<AuthI>(`${environment.apiURL}/usuarios/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }

  get auth() {
    return { ...this._auth };
  }

  logIn(): Observable<AuthI> {
    return this._http.get<AuthI>(`${environment.apiURL}/usuarios/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );
  }
}
