import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../components/spinner/spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{

  constructor(private spinner: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqCopy = req;
    let isNeedLoader = false;
    if (req.headers.has(environment.GLOBAL_SPINNER)) {
      isNeedLoader = true;
      this.spinner.setStatus(true);
      reqCopy = req.clone({headers: req.headers.delete(environment.GLOBAL_SPINNER)});
    }
    return next.handle(reqCopy).pipe(
      finalize(() => {
        if (isNeedLoader) this.spinner.setStatus(false);
      }),
    );
  }

}