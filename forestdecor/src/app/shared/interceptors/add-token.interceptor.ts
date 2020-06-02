import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { User } from '../services/auth/user';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor{

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.auth.user.pipe(
      take(1),
      exhaustMap((user: User) => {
        let cloneReq = null;
        if (!!user && user.token) {
          cloneReq = req.clone({params: req.params.set('auth', user.token)});
        }
        return next.handle(cloneReq || req);
      }),
    );
  }

}
