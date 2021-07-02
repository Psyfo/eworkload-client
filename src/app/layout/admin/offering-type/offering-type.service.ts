import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IOfferingType } from './offering-type.interface';

@Injectable({
  providedIn: 'root'
})
export class OfferingTypeService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IOfferingType[]> {
    return this.http
      .get<IOfferingType[]>(`${this.baseUrl}/offering-types`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IOfferingType> {
    return this.http
      .get<IOfferingType>(`${this.baseUrl}/offering-types/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byOfferingTypeId(offeringtypeId: string): Observable<IOfferingType> {
    return this.http
      .get<IOfferingType>(
        `${this.baseUrl}/offering-types/offeringtypeId/${offeringtypeId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(offeringtype: IOfferingType): Observable<IOfferingType> {
    return this.http
      .post<IOfferingType>(`${this.baseUrl}/offering-types`, offeringtype, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(offeringtype: IOfferingType): Observable<IOfferingType> {
    return this.http
      .put<IOfferingType>(`${this.baseUrl}/offering-types`, offeringtype, {
        headers: this.headers
      })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IOfferingType> {
    return this.http
      .delete<IOfferingType>(`${this.baseUrl}/offering-types`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
