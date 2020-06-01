import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../errors/errors.service';
import { ERROR_LIST } from '../errors/error-list';

@Injectable({
  providedIn: 'root'
})
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private errorsService: ErrorsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        let title, timer;
        if ((typeof error.error.error) === 'string') {
          title = ERROR_LIST[error.error.error] || error.error.error;
          timer = 0;
        } else {
          title = ERROR_LIST[error.error.error.message] || error.error.error.message;
          timer = 15000;
        }
        this.errorsService.showError({title, message: error.message}, timer);
        return throwError(error);
      }),
    );
  }

}
