import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from './https.interceptor';

export const HttpsInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
];

