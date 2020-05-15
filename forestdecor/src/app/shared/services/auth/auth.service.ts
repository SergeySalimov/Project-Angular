import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IsLog } from '../../models/isLog';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // ToDO delete later
  private _isLogged = false;

  isLog: BehaviorSubject<IsLog> = new BehaviorSubject<IsLog>({
    isLogged: false,
    isAdmin: false
  });

  constructor(private router: Router) { }

  // ToDO delete later
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
