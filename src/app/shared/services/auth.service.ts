import { ChangePasswordGQL } from './../generated/output';
import { Injectable } from '@angular/core';
import { LoginGQL } from '../generated';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private loginGql: LoginGQL,
    private changePasswordGql: ChangePasswordGQL
  ) {}

  login(userId: string, password: string) {
    return this.loginGql
      .watch({ userId: userId, password: password })
      .valueChanges.pipe(
        map(
          result => result,
          err => err
        )
      );
  }

  changePassword(userId: string, password: string, newPassword: string) {
    return this.changePasswordGql
      .mutate({ userId: userId, password: password, newPassword: newPassword })
      .pipe(
        result => result,
        err => err
      );
  }
}
