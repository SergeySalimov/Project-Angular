import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../services/errors/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorsInterceptor implements HttpInterceptor{
  constructor (private errorsService: ErrorsService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        this.errorsService.showError({title: error.error.error, message: error.message}, 0);
        return throwError(error);
      }),
    );
  }

}
