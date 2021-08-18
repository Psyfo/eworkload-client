import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IGroup } from './group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(`${this.baseUrl}/groups`).pipe(
      tap((result) => {
        result.map((group: IGroup) => {
          group.optionName = `${group.name} (${group.studentsEnrolled})`;
        });
      })
    );
  }

  byId(_id: string): Observable<IGroup> {
    return this.http
      .get<IGroup>(`${this.baseUrl}/groups/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byGroupId(groupId: string): Observable<IGroup> {
    return this.http
      .get<IGroup>(`${this.baseUrl}/groups/groupId/${groupId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(group: IGroup): Observable<IGroup> {
    return this.http
      .post<IGroup>(`${this.baseUrl}/groups`, group, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(group: IGroup): Observable<IGroup> {
    return this.http
      .put<IGroup>(`${this.baseUrl}/groups`, group, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IGroup> {
    return this.http
      .delete<IGroup>(`${this.baseUrl}/groups`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
