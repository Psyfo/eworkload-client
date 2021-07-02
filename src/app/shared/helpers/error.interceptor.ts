import { AlertService } from 'src/app/shared/modules';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorIntercept implements HttpInterceptor {
  constructor(private alertService: AlertService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          this.alertService.errorToast(`${error.error.message}`);
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          this.alertService.errorToast(`${error.status} - ${error.message}`);
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
