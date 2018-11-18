import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Qualification } from '../models';

@Injectable()
export class QualificationService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Qualification[]>(`${environment.apiUrl}/qualifications`);
    }

    getById(qualificationId: number) {
        return this.http.get(`${environment.apiUrl}/qualifications/` + qualificationId);
    }

    create(qualification: Qualification) {
        return this.http.post(`${environment.apiUrl}/qualifications/add`, qualification);
    }

    update(qualification: Qualification) {
        return this.http.put(`${environment.apiUrl}/qualifications/` + qualification.qualificationId, qualification);
    }

    delete(qualificationId: string) {
        return this.http.delete(`${environment.apiUrl}/qualifications/` + qualificationId);
    }
}
