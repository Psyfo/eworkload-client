import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IDepartment } from './department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(`${this.baseUrl}/departments`).pipe(
      tap((result) => {
        result.map(
          (department: IDepartment) =>
            (department.optionName = `${department.name} (${department.departmentId})`)
        );
      })
    );
  }

  byId(_id: string): Observable<IDepartment> {
    return this.http
      .get<IDepartment>(`${this.baseUrl}/departments/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byDepartmentId(departmentId: string): Observable<IDepartment> {
    return this.http
      .get<IDepartment>(
        `${this.baseUrl}/departments/departmentId/${departmentId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(department: IDepartment): Observable<IDepartment> {
    return this.http
      .post<IDepartment>(`${this.baseUrl}/departments`, department, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(department: IDepartment): Observable<IDepartment> {
    return this.http
      .put<IDepartment>(`${this.baseUrl}/departments`, department, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IDepartment> {
    return this.http
      .delete<IDepartment>(`${this.baseUrl}/departments`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
