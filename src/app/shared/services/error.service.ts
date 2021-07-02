import { throwError } from 'rxjs';
import { AlertService } from 'src/app/shared/modules';

import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private alertService: AlertService) {}
  handleError(error: any) {
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
  }
}
