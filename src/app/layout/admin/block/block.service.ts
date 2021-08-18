import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { IBlock } from './block.interface';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  private baseUrl = environment.baseUrl;

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  all(): Observable<IBlock[]> {
    return this.http.get<IBlock[]>(`${this.baseUrl}/blocks`).pipe(
      tap((result) => {
        result.map(
          (block: IBlock) =>
            (block.optionName = `${block.name} (${block.blockId})`)
        );
      })
    );
  }

  byId(_id: string): Observable<IBlock> {
    return this.http
      .get<IBlock>(`${this.baseUrl}/blocks/${_id}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  byBlockId(blockId: string): Observable<IBlock> {
    return this.http
      .get<IBlock>(`${this.baseUrl}/blocks/blockId/${blockId}`)
      .pipe(tap((result) => console.log('fetch request sent')));
  }

  create(block: IBlock): Observable<IBlock> {
    return this.http
      .post<IBlock>(`${this.baseUrl}/blocks`, block, { headers: this.headers })
      .pipe(tap((result) => console.log('create request sent')));
  }

  update(block: IBlock): Observable<IBlock> {
    return this.http
      .put<IBlock>(`${this.baseUrl}/blocks`, block, { headers: this.headers })
      .pipe(tap((result) => console.log('update request sent')));
  }

  delete(_id: string): Observable<IBlock> {
    return this.http
      .delete<IBlock>(`${this.baseUrl}/blocks`, {
        headers: this.headers,
        body: { _id: _id }
      })
      .pipe(tap((result) => console.log('delete request sent')));
  }
}
