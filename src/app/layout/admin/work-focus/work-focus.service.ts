import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IWorkFocus } from './work-focus.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkFocusService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IWorkFocus[]> {
    return this.http
      .get<IWorkFocus[]>(`${this.baseUrl}/work-focuses`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IWorkFocus> {
    return this.http
      .get<IWorkFocus>(`${this.baseUrl}/work-focuses/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byBlockId(blockId: string): Observable<IWorkFocus> {
    return this.http
      .get<IWorkFocus>(`${this.baseUrl}/work-focuses/blockId/${blockId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(workFocus: IWorkFocus): Observable<IWorkFocus> {
    return this.http
      .post<IWorkFocus>(`${this.baseUrl}/work-focuses`, workFocus, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(workFocus: IWorkFocus): Observable<IWorkFocus> {
    return this.http
      .put<IWorkFocus>(`${this.baseUrl}/work-focuses`, workFocus, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IWorkFocus> {
    return this.http
      .delete<IWorkFocus>(`${this.baseUrl}/work-focuses`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
