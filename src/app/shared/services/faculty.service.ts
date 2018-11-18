import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Faculty } from '../models';

@Injectable()
export class FacultyService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Faculty[]>(`${environment.apiUrl}/faculties`);
    }

    getById(facultyId: number) {
        return this.http.get(`${environment.apiUrl}/faculties/` + facultyId);
    }

    create(faculty: Faculty) {
        return this.http.post(`${environment.apiUrl}/faculties/add`, faculty);
    }

    update(faculty: Faculty) {
        return this.http.put(`${environment.apiUrl}/faculties/` + faculty.facultyId, faculty);
    }

    delete(facultyId: string) {
        return this.http.delete(`${environment.apiUrl}/faculties/` + facultyId);
    }
}
