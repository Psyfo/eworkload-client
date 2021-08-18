import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IDuty } from './duty.interface';

@Injectable({
  providedIn: 'root'
})
export class DutyService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IDuty[]> {
    return this.http.get<IDuty[]>(`${this.baseUrl}/duties`).pipe(
      tap((result) => {
        result.map(
          (duty: IDuty) => (duty.optionName = `${duty.name} (${duty.dutyId})`)
        );
      })
    );
  }

  byId(_id: string): Observable<IDuty> {
    return this.http
      .get<IDuty>(`${this.baseUrl}/duties/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byDutyId(dutyId: string): Observable<IDuty> {
    return this.http
      .get<IDuty>(`${this.baseUrl}/duties/dutyId/${dutyId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(duty: IDuty): Observable<IDuty> {
    return this.http
      .post<IDuty>(`${this.baseUrl}/duties`, duty, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(duty: IDuty): Observable<IDuty> {
    return this.http
      .put<IDuty>(`${this.baseUrl}/duties`, duty, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IDuty> {
    return this.http
      .delete<IDuty>(`${this.baseUrl}/duties`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
