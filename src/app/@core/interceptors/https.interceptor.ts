import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
  baseUrl = 'http://localhost:3000/v1';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('req.url', req.url);
    const myReq = req.clone({
      url: this.baseUrl + req.url,
    });
    return next.handle(myReq);
  }
}
