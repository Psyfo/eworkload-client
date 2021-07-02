import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from './user.interface';
import { SelectItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;
  public nationalities: SelectItem[] = [
    { label: 'Black', value: 'Black' },
    { label: 'Coloured', value: 'Coloured' },
    { label: 'Indian', value: 'Indian' },
    { label: 'White', value: 'White' }
  ];
  public genders: SelectItem[] = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ];
  public workFocuses: SelectItem[] = [
    { label: 'Teaching', value: 'Teaching' },
    { label: 'Research', value: 'Research' },
    { label: 'Balanced', value: 'Balanced' }
  ];
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IUser[]> {
    return this.http
      .get<IUser[]>(`${this.baseUrl}/users`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IUser> {
    return this.http
      .get<IUser>(`${this.baseUrl}/users/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byUserId(userId: string): Observable<IUser> {
    return this.http
      .get<IUser>(`${this.baseUrl}/users/userId/${userId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(user: IUser): Observable<IUser> {
    return this.http
      .post<IUser>(`${this.baseUrl}/users`, user, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(user: IUser): Observable<IUser> {
    return this.http
      .put<IUser>(`${this.baseUrl}/users`, user, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IUser> {
    return this.http
      .delete<IUser>(`${this.baseUrl}/users`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }

  isAuthenticated(): boolean {
    const authData = JSON.parse(localStorage.getItem('authData'));
    return authData.isLoggedIn;
  }

  currentUserId(): Observable<string> {
    const authData = JSON.parse(localStorage.getItem('authData'));

    return of(authData.userId);
  }

  currentUserIdStatic() {
    const authData = JSON.parse(localStorage.getItem('authData'));

    return authData.userId;
  }
  currentUser() {
    const authData = JSON.parse(localStorage.getItem('authData'));
  }
}
