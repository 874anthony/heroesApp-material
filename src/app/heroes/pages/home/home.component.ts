import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthI } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent {
  get auth() {
    return this._authService.auth;
  }

  constructor(private _router: Router, private _authService: AuthService) {}

  logOut(): void {
    this._router.navigate(['/auth']);
  }
}
