import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../services/spinners/spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{

  constructor(private spinner: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let reqCopy = req;
    let isNeedLoader: string | boolean = false;
    if (req.headers.has(environment.GLOBAL_SPINNER)) {
      isNeedLoader = environment.GLOBAL_SPINNER;
      this.spinner.setStatus(true);
      reqCopy = req.clone({headers: req.headers.delete(environment.GLOBAL_SPINNER)});
    }
    if (req.headers.has(environment.LITTLE_SPINNER)) {
      isNeedLoader = environment.LITTLE_SPINNER;
      this.spinner.setMessagesSpinerStatus(true);
      reqCopy = req.clone({headers: req.headers.delete(environment.LITTLE_SPINNER)});
    }
    return next.handle(reqCopy).pipe(
      finalize(() => {
        if (isNeedLoader === environment.GLOBAL_SPINNER) {
          this.spinner.setStatus(false)
        }
        if (isNeedLoader === environment.LITTLE_SPINNER) {
          this.spinner.setMessagesSpinerStatus(false)
        }
      }),
    );
  }

}
