import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IsLog } from '../../models/isLog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../../models/userData';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLogged: BehaviorSubject<IsLog> = new BehaviorSubject<IsLog>({
    isLogged: false,
    isAdmin: false
  });

  constructor(private router: Router, private http: HttpClient) { }

  get isLogged() {
    return this._isLogged;
  }

  registration(userData: UserData, password: string) {
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    const displayName = `${userData.name}-|-${userData.phone}`;
    return this.http.post(`${environment.registrUrl}${environment.firebase.apiKey}`,
      {email: userData.email, password, displayName, returnSecureToken: true}, { headers });
  }

  authentication(email: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    return this.http.post(`${environment.authUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true}, { headers });
  }

  recovery(email: string) {
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    return this.http.post(`${environment.recvUrl}${environment.firebase.apiKey}`,
      {requestType: 'PASSWORD_RESET', email}, { headers });
  }

}
