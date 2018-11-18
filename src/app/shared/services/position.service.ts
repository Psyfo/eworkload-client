import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Position } from '../models';

@Injectable()
export class PositionService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Position[]>(`${environment.apiUrl}/positions`);
    }

    getById(positionId: number) {
        return this.http.get(`${environment.apiUrl}/positions/` + positionId);
    }

    create(position: Position) {
        return this.http.post(`${environment.apiUrl}/positions/add`, position);
    }

    update(position: Position) {
        return this.http.put(`${environment.apiUrl}/positions/` + position.positionId, position);
    }

    delete(positionId: string) {
        return this.http.delete(`${environment.apiUrl}/positions/` + positionId);
    }
}
