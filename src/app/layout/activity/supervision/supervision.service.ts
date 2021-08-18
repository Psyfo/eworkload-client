import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ISupervisionActivity } from './supervision.interface';

@Injectable({
  providedIn: 'root'
})
export class SupervisionService {
  public supervisionRoles = [
    { label: 'Supervisor', value: 'Supervisor' },
    { label: 'Co-Supervisor', value: 'Co-Supervisor' }
  ];
  public splits = [
    { label: '25%', value: 25 },
    { label: '50%', value: 50 },
    { label: '75%', value: 75 }
  ];

  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<ISupervisionActivity[]> {
    return this.http
      .get<ISupervisionActivity[]>(`${this.baseUrl}/supervision-activities`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<ISupervisionActivity> {
    return this.http
      .get<ISupervisionActivity>(
        `${this.baseUrl}/supervision-activitie-activities/${_id}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byUserId(userId: string): Observable<ISupervisionActivity> {
    return this.http
      .get<ISupervisionActivity>(
        `${this.baseUrl}/supervision-activities/userId/${userId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(
    formalinstruction: ISupervisionActivity
  ): Observable<ISupervisionActivity> {
    return this.http
      .post<ISupervisionActivity>(
        `${this.baseUrl}/supervision-activities`,
        formalinstruction,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(
    formalinstruction: ISupervisionActivity
  ): Observable<ISupervisionActivity> {
    return this.http
      .put<ISupervisionActivity>(
        `${this.baseUrl}/supervision-activities`,
        formalinstruction,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<ISupervisionActivity> {
    return this.http
      .delete<ISupervisionActivity>(`${this.baseUrl}/supervision-activities`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
