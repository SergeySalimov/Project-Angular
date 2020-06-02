import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConsoleService } from '../console/console.service';
import { ERROR_LIST } from '../console/error-list';

@Injectable({
  providedIn: 'root'
})
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private errorsService: ConsoleService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        const title = (ERROR_LIST[error.error.error.message] || error.error.error.message) ||
          (ERROR_LIST[error.error.error] || error.error.error);
        this.errorsService.showInfoMessage({title, message: error.message}, 15000);
        return throwError(error);
      }),
    );
  }

}
