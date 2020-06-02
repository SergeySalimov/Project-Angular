import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './shared/interceptors/add-token.interceptor';
import { ErrorsInterceptor } from './shared/interceptors/errors.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';

export const INTERCEPTORS = [
  {provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
];
