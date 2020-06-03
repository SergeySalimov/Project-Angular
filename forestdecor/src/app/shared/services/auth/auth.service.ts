import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserData } from '../../models/userData';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { ConsoleService } from '../console/console.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _admins: string[];
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private router: Router, private http: HttpClient, private consoleService: ConsoleService) {
  }

  get user() {
    return this._user.asObservable();
  }

  get admins() {
    return [...this._admins];
  }

  logout() {
    this._user.next(null);
    localStorage.removeItem(environment.USER_KEY_IN_LOCAL_STORAGE);
    this.router.navigate(['/']);
  }

  getAdminsFromServer() {
    return this.http.get<string[]>(`${environment.firebase.databaseURL}/admins.json`).pipe(
      tap((admins: string[]) => this._admins = [...admins]),
      tap((admins: string[]) => {
          if (this._user.getValue()?.isAdmin && !admins.includes(this._user.getValue().email)) {
            this.logout();
          }
        }
      )
    );
  }

  registration(userData: UserData, password: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    const displayName = `${userData.name}${environment.dividerForDisplayName}${userData.phone}`;
    return this.http.post(`${environment.registrUrl}${environment.firebase.apiKey}`,
      {email: userData.email, password, displayName, returnSecureToken: true}, {headers}).pipe(
      tap((data: AuthResponse) => this._loginHandler(data)),
    );
  }

  authentication(email: string, password: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.post(`${environment.authUrl}${environment.firebase.apiKey}`,
      {email, password, returnSecureToken: true}, {headers}).pipe(
      tap((data: AuthResponse) => this._loginHandler(data)),
    );
  }

  recovery(email: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.post(`${environment.recvUrl}${environment.firebase.apiKey}`,
      {requestType: 'PASSWORD_RESET', email}, {headers});
  }

  autoLogin() {
    let storageUser: {
      email: string, name: string, phone: string, isAdmin: boolean, id: string, _token: string,
      _expirationDate: Date, _refreshToken: string
    };

    if (localStorage.getItem(environment.USER_KEY_IN_LOCAL_STORAGE)) {
      storageUser = JSON.parse(localStorage.getItem(environment.USER_KEY_IN_LOCAL_STORAGE));
    } else {
      return false;
    }

    const loadedUser: User = new User(
      storageUser.email,
      storageUser.name,
      storageUser.phone,
      storageUser.isAdmin,
      storageUser.id,
      storageUser._token,
      new Date(storageUser._expirationDate),
      storageUser._refreshToken,
    );

    if (loadedUser.token) {
      const duration = (new Date(storageUser._expirationDate)).getTime() - (new Date()).getTime();
      this.autoLogout(duration);
      this._user.next(loadedUser);
    }
  }

  autoLogout(duration: number) {
    setTimeout(() => {
      this.logout();
      this.consoleService.showInfoMessage({title: 'Вы были разлогинены', message: 'Время истекло', style: 'warning'}, 0)
    }, duration);
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
    localStorage.setItem(environment.USER_KEY_IN_LOCAL_STORAGE, JSON.stringify(user));
    this.autoLogout(Number(data.expiresIn) * 1000);
    user.isAdmin ? this.router.navigate([environment.afterLoginRedirectAdminUrl]) :
      this.router.navigate([environment.afterLoginRedirectUrl]);
  }
}
