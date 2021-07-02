import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IFaculty } from './faculty.interface';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) {}

  all(): Observable<IFaculty[]> {
    return this.http
      .get<IFaculty[]>(`${this.baseUrl}/faculties`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IFaculty> {
    return this.http
      .get<IFaculty>(`${this.baseUrl}/faculties/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byFacultyId(facultyId: string): Observable<IFaculty> {
    return this.http
      .get<IFaculty>(`${this.baseUrl}/faculties/facultyId/${facultyId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(faculty: IFaculty): Observable<IFaculty> {
    return this.http
      .post<IFaculty>(`${this.baseUrl}/faculties`, faculty, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(faculty: IFaculty): Observable<IFaculty> {
    return this.http
      .put<IFaculty>(`${this.baseUrl}/faculties`, faculty, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IFaculty> {
    return this.http
      .delete<IFaculty>(`${this.baseUrl}/faculties`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
