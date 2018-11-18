import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Duty } from '../models';

@Injectable()
export class DutyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Duty[]>(`${environment.apiUrl}/duties`);
    }

    getById(dutyId: number) {
        return this.http.get(`${environment.apiUrl}/duties/` + dutyId);
    }

    create(duty: Duty) {
        return this.http.post(`${environment.apiUrl}/duties/add`, duty);
    }

    update(duty: Duty) {
        return this.http.put(`${environment.apiUrl}/duties/` + duty.dutyId, duty);
    }

    delete(dutyId: string) {
        return this.http.delete(`${environment.apiUrl}/duties/` + dutyId);
    }
}
