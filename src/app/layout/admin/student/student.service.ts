import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IStudent } from './student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) {}

  all(): Observable<IStudent[]> {
    return this.http
      .get<IStudent[]>(`${this.baseUrl}/students`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IStudent> {
    return this.http
      .get<IStudent>(`${this.baseUrl}/students/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byStudentId(studentId: string): Observable<IStudent> {
    return this.http
      .get<IStudent>(`${this.baseUrl}/students/studentId/${studentId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(student: IStudent): Observable<IStudent> {
    return this.http
      .post<IStudent>(`${this.baseUrl}/students`, student, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(student: IStudent): Observable<IStudent> {
    return this.http
      .put<IStudent>(`${this.baseUrl}/students`, student, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IStudent> {
    return this.http
      .delete<IStudent>(`${this.baseUrl}/students`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
