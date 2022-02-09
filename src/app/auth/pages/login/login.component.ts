import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthI } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  constructor(private _router: Router, private _authService: AuthService) {}

  logIn(): void {
    this._authService.logIn().subscribe((user) => {
      return user.id ? this._router.navigate(['/heroes']) : false;
    });
  }
}
