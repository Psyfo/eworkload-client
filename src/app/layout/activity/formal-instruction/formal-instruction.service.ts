import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IFormalInstructionActivity } from './formal-instruction.interface';

@Injectable({
  providedIn: 'root'
})
export class FormalInstructionService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IFormalInstructionActivity[]> {
    return this.http
      .get<IFormalInstructionActivity[]>(
        `${this.baseUrl}/formal-instruction-activities`
      )
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IFormalInstructionActivity> {
    return this.http
      .get<IFormalInstructionActivity>(
        `${this.baseUrl}/formal-instruction-activities/${_id}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byUserId(userId: string): Observable<IFormalInstructionActivity> {
    return this.http
      .get<IFormalInstructionActivity>(
        `${this.baseUrl}/formal-instruction-activities/userId/${userId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(
    formalinstruction: IFormalInstructionActivity
  ): Observable<IFormalInstructionActivity> {
    return this.http
      .post<IFormalInstructionActivity>(
        `${this.baseUrl}/formal-instruction-activities`,
        formalinstruction,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(
    formalinstruction: IFormalInstructionActivity
  ): Observable<IFormalInstructionActivity> {
    return this.http
      .put<IFormalInstructionActivity>(
        `${this.baseUrl}/formal-instruction-activities`,
        formalinstruction,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IFormalInstructionActivity> {
    return this.http
      .delete<IFormalInstructionActivity>(
        `${this.baseUrl}/formal-instruction-activities`,
        {
          headers: this.headers,
          body: { _id: _id }
        }
      )
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
