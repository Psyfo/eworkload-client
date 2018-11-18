import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Subject } from '../models';

@Injectable()
export class SubjectService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Subject[]>(`${environment.apiUrl}/subjects`);
    }

    getById(subjectId: number) {
        return this.http.get(`${environment.apiUrl}/subjects/` + subjectId);
    }

    create(subject: Subject) {
        return this.http.post(`${environment.apiUrl}/subjects/add`, subject);
    }

    update(subject: Subject) {
        return this.http.put(`${environment.apiUrl}/subjects/` + subject.subjectId, subject);
    }

    delete(subjectId: string) {
        return this.http.delete(`${environment.apiUrl}/subjects/` + subjectId);
    }
}
