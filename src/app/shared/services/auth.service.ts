import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  login(userId: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/auth/login`, {
        userId: userId,
        password: password
      })
      .pipe(tap((result) => console.log('Request sent')));
  }

  changePassword(userId: string, password: string, newPassword: string) {
    return this.http
      .post<any>(`${this.baseUrl}/auth/changePassword`, {
        userId: userId,
        password: password,
        newPassword: newPassword
      })
      .pipe(tap((result) => console.log('Request sent')));
  }
}
