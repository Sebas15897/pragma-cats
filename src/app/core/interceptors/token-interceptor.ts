import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = 'bda53789-d59e-46cd-9bc4-2936630fde39';
    const modifiedReq = req.clone({
      headers: req.headers.set('api-key', `${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
