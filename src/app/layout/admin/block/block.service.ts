import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorService } from 'src/app/shared/services';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertService } from '../../../shared/modules/alert/alert.service';
import { IBlock } from './block.interface';

@Injectable({
    providedIn: 'root'
})
export class BlockService {

    private baseUrl = `${environment.baseUrl}/blocks`

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    constructor(
        private http: HttpClient,
        private alertService: AlertService,
        private errorService: ErrorService
    ) {}

    all(): Observable<IBlock[]> {
        return this.http.get<IBlock[]>(`${this.baseUrl}`).pipe(tap(result => console.log('fetched data')), catchError(this.errorService.handleError('all', [])));
    }

    byId(_id: string): Observable<IBlock> {
       return this.http.get<IBlock>(`${this.baseUrl}/${_id}`).pipe(tap(result => console.log('fetch request sent')), catchError(this.errorService.handleError));
    }

    create(block: IBlock): Observable<IBlock> {
       return this.http.post<IBlock>(`${this.baseUrl}/create`, block, this.httpOptions).pipe(tap(result => console.log('create request sent')), catchError(this.errorService.handleError));
    }

    update(block: IBlock): Observable<IBlock>  {
        return this.http.put<IBlock>(`${this.baseUrl}/${block._id}`, block, this.httpOptions).pipe(tap(result => console.log('update request sent')), catchError(this.errorService.handleError));
    }

    delete(_id: string): Observable<IBlock> {
       return this.http.delete<IBlock>(`${this.baseUrl}/${_id}`, this.httpOptions).pipe(tap(result => console.log('delete request sent')), catchError(this.errorService.handleError));
    }
}
