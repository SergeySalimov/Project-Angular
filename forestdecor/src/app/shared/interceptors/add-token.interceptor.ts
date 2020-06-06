import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { exhaustMap, take } from 'rxjs/operators';
import { User } from '../services/auth/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor{

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.auth.user.pipe(
      take(1),
      exhaustMap((user: User) => {
        let reqCopy = req;
        let isNeedToken = false;
        if (req.headers.has(environment.NEED_TOKEN)) {
          isNeedToken = true;
          reqCopy = req.clone({headers: req.headers.delete(environment.NEED_TOKEN)});
          if (!!user && user.token) {
            reqCopy = reqCopy.clone({params: req.params.set('auth', user.token)});
          }
        }
        return isNeedToken ? next.handle(reqCopy) : next.handle(req);
      }),
    );
  }

}
