import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged = false;

  constructor(private router: Router) { }

  get isLogged() {
    return this._isLogged;
  }

  login() {
    this._isLogged = true;
    this.router.navigate(['/messages']);
    console.log('login');
  }

  logout() {
    this._isLogged = false;
    this.router.navigate(['']);
    console.log('logout');
  }

}
