import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = {};
          if (error.error instanceof ErrorEvent) {
            console.log('Client side error');
            errorMsg = { status: error.status, message: 'Oops, an error occured. Try Later!' };
          }
          else {
            console.log('Server side error');
            errorMsg = { status: error.status, message: 'Oops, an error occured. Try Later!' };
          }
          return throwError(errorMsg);
        })
      )
  }
}
