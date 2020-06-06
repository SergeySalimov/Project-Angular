import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>  {
    return this.auth.user.pipe(
      take(1),
      map((user: User) => !user ? true : this.router.createUrlTree([environment.afterLoginRedirectUrl])),
    );
  }

}
