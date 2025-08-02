import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _Router: Router) {}

  logIn(username: string, password: string): void {
    const eToken = JSON.stringify({ username, password });
    localStorage.setItem('eToken', eToken);
    this._Router.navigate(['/dashboard']);
  }

  logOut(): void {
    localStorage.removeItem('eToken');
    this._Router.navigate(['/login']);
  }

  getUser(): string {
    const token = localStorage.getItem('eToken');
    const userObject = token ? JSON.parse(token) : null;
    return userObject.username;
  }
}
