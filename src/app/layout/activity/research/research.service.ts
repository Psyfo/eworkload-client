import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api/selectitem';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment.prod';
import { IResearchActivity } from './research.interface';


@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  public outputTypes: SelectItem[] = [
    { label: 'Conference Proceedings', value: 1 },
    { label: 'Journal', value: 2 },
    { label: 'Book', value: 3 },
    { label: 'Chapter', value: 4 },
    { label: 'Patent', value: 5 }
  ];

  public conferenceActivities: SelectItem[] = [
    { label: 'Presented Paper', value: 'Presented Paper' },
    { label: 'Presented Poster', value: 'Presented Poster' },
    { label: 'Attended', value: 'Attended' },
    { label: 'Keynote address', value: 'Keynote address' },
    { label: 'Chaired a session', value: 'Chair a session' },
    { label: 'Served on a panel', value: 'Served on a panel' }
  ];

  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IResearchActivity[]> {
    return this.http
      .get<IResearchActivity[]>(
        `${this.baseUrl}/research-activities`
      )
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IResearchActivity> {
    return this.http
      .get<IResearchActivity>(
        `${this.baseUrl}/research-activities/${_id}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byUserId(userId: string): Observable<IResearchActivity> {
    return this.http
      .get<IResearchActivity>(
        `${this.baseUrl}/research-activities/userId/${userId}`
      )
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(
    research: IResearchActivity
  ): Observable<IResearchActivity> {
    return this.http
      .post<IResearchActivity>(
        `${this.baseUrl}/research-activities`,
        research,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(
    research: IResearchActivity
  ): Observable<IResearchActivity> {
    return this.http
      .put<IResearchActivity>(
        `${this.baseUrl}/research-activities`,
        research,
        { headers: this.headers }
      )
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IResearchActivity> {
    return this.http
      .delete<IResearchActivity>(
        `${this.baseUrl}/research-activities`,
        {
          headers: this.headers,
          body: { _id: _id }
        }
      )
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
