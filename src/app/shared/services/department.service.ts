import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Department } from '../models';

@Injectable()
export class DepartmentService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Department[]>(`${environment.apiUrl}/departments`);
    }

    getById(departmentId: number) {
        return this.http.get(`${environment.apiUrl}/departments/` + departmentId);
    }

    create(department: Department) {
        return this.http.post(`${environment.apiUrl}/departments/add`, department);
    }

    update(department: Department) {
        return this.http.put(`${environment.apiUrl}/departments/` + department.departmentId, department);
    }

    delete(departmentId: string) {
        return this.http.delete(`${environment.apiUrl}/departments/` + departmentId);
    }
}
