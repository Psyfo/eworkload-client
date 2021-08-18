import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IQualification } from './qualification.interface';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IQualification[]> {
    return this.http
      .get<IQualification[]>(`${this.baseUrl}/qualifications`)
      .pipe(
        tap((result) => {
          result.map(
            (qualification: IQualification) =>
              (qualification.optionName = `${qualification.name} (${qualification.qualificationId})`)
          );
        })
      );
  }

  byId(_id: string): Observable<IQualification> {
    return this.http
      .get<IQualification>(`${this.baseUrl}/qualifications/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byQualificationId(qualificationId: string): Observable<IQualification> {
    return this.http
      .get<IQualification>(
        `${this.baseUrl}/qualifications/qualificationId/${qualificationId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(qualification: IQualification): Observable<IQualification> {
    return this.http
      .post<IQualification>(`${this.baseUrl}/qualifications`, qualification, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(qualification: IQualification): Observable<IQualification> {
    return this.http
      .put<IQualification>(`${this.baseUrl}/qualifications`, qualification, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IQualification> {
    return this.http
      .delete<IQualification>(`${this.baseUrl}/qualifications`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
