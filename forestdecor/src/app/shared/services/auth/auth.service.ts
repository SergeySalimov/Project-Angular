import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../../models/userData';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { User } from './user';
import { AuthResponse } from './auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _admins: string[];
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private router: Router, private http: HttpClient) {
  }

  get user() {
    return this._user.asObservable();
  }

  get admins() {
    return [...this._admins];
  }

  getAdminsFromServer() {
    return this.http.get<string[]>(`${environment.firebase.databaseURL}/admins.json`).pipe(
      tap((admins: string[]) => this._admins = [...admins]),
    );
  }

  logout() {
    this._user.next(null);
  }

  registration(userData: UserData, password: string) {
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    const displayName = `${userData.name}${environment.dividerForDisplayName}${userData.phone}`;
    return this.http.post(`${environment.registrUrl}${environment.firebase.apiKey}`,
      {email: userData.email, password, displayName, returnSecureToken: true}, {headers}).pipe(
      tap((data: AuthResponse) => this._loginHandler(data)),
    );
  }

  authentication(email: string, password: string) {
    // const loader = environment.globalSpinnerName;
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    return this.http.post(`${environment.authUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true}, {headers}).pipe(
      tap((data: AuthResponse) => this._loginHandler(data)),
    );
  }

  recovery(email: string) {
    const headers: HttpHeaders = new HttpHeaders({'X-loader': 'spinnerNeeded'});
    return this.http.post(`${environment.recvUrl}${environment.firebase.apiKey}`,
      {requestType: 'PASSWORD_RESET', email}, {headers});
  }

  private _loginHandler(data: AuthResponse) {
    const expirationDate: Date = new Date(new Date().getTime() + Number(data.expiresIn) * 1000);
    const nameAndPhone: string[] = data.displayName.split(environment.dividerForDisplayName);
    const user: User = new User(
      data.email,
      nameAndPhone[0],
      nameAndPhone[1],
      this.admins.includes(data.email),
      data.localId,
      data.idToken,
      expirationDate,
      data.refreshToken,
    );
    this._user.next(user);
    user.isAdmin ? this.router.navigate([environment.afterLoginRedirectAdminUrl]) :
    this.router.navigate([environment.afterLoginRedirectUrl]);
  }

}
