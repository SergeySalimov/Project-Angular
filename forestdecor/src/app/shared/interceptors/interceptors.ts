import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './add-token.interceptor';
import { ErrorsInterceptor } from './errors.interceptor';
import { LoaderInterceptor } from './loader.interceptor';

export const INTERCEPTORS = [
  {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
];
