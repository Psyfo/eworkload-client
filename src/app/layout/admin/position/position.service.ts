import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IPosition } from './position.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IPosition[]> {
    return this.http.get<IPosition[]>(`${this.baseUrl}/positions`).pipe(
      tap((result) => {
        result.map(
          (position: IPosition) =>
            (position.optionName = `${position.name} (${position.positionId})`)
        );
      })
    );
  }

  byId(_id: string): Observable<IPosition> {
    return this.http
      .get<IPosition>(`${this.baseUrl}/positions/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byPositionId(positionId: string): Observable<IPosition> {
    return this.http
      .get<IPosition>(`${this.baseUrl}/positions/positionId/${positionId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(position: IPosition): Observable<IPosition> {
    return this.http
      .post<IPosition>(`${this.baseUrl}/positions`, position, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(position: IPosition): Observable<IPosition> {
    return this.http
      .put<IPosition>(`${this.baseUrl}/positions`, position, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IPosition> {
    return this.http
      .delete<IPosition>(`${this.baseUrl}/positions`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
