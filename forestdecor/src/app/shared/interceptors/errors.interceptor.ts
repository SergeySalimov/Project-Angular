import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../errors/errors.service';

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
          title = error.error.error;
          timer = 0;
        } else {
          title = error.error.error.message;
          timer = 5000;
        }
        this.errorsService.showError({title, message: error.message}, timer);
        return throwError(error);
      }),
    );
  }

}
