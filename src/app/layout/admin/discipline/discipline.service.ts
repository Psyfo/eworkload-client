import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IDiscipline } from './discipline.interface';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IDiscipline[]> {
    return this.http.get<IDiscipline[]>(`${this.baseUrl}/disciplines`).pipe(
      tap((result) => {
        result.map(
          (discipline: IDiscipline) =>
            (discipline.optionName = `${discipline.name} (${discipline.disciplineId})`)
        );
      })
    );
  }

  byId(_id: string): Observable<IDiscipline> {
    return this.http
      .get<IDiscipline>(`${this.baseUrl}/disciplines/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byDisciplineId(disciplineId: string): Observable<IDiscipline> {
    return this.http
      .get<IDiscipline>(
        `${this.baseUrl}/disciplines/disciplineId/${disciplineId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(discipline: IDiscipline): Observable<IDiscipline> {
    return this.http
      .post<IDiscipline>(`${this.baseUrl}/disciplines`, discipline, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(discipline: IDiscipline): Observable<IDiscipline> {
    return this.http
      .put<IDiscipline>(`${this.baseUrl}/disciplines`, discipline, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IDiscipline> {
    return this.http
      .delete<IDiscipline>(`${this.baseUrl}/disciplines`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
