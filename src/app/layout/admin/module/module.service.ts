import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IModule } from './module.interface';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient
  ) {}

  all(): Observable<IModule[]> {
    return this.http
      .get<IModule[]>(`${this.baseUrl}/modules`)
      .pipe(tap((result) => console.log('fetched data')));
  }

  byId(_id: string): Observable<IModule> {
    return this.http
      .get<IModule>(`${this.baseUrl}/modules/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byModuleId(moduleId: string): Observable<IModule> {
    return this.http
      .get<IModule>(`${this.baseUrl}/modules/moduleId/${moduleId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(module: IModule): Observable<IModule> {
    return this.http
      .post<IModule>(`${this.baseUrl}/modules`, module, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(module: IModule): Observable<IModule> {
    return this.http
      .put<IModule>(`${this.baseUrl}/modules`, module, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IModule> {
    return this.http
      .delete<IModule>(`${this.baseUrl}/modules`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
