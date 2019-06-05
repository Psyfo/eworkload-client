import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
    AddDepartmentGQL,
    DepartmentGQL,
    DepartmentsGQL,
    EditDepartmentGQL
} from '../generated/output';
import { Department } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    department: Department;
    departments: Department[];

    loading: boolean;
    errors: any;

    constructor(
        private errorService: ErrorService,
        private alertService: AlertService,
        private departmentGql: DepartmentGQL,
        private departmentsGql: DepartmentsGQL,
        private addDepartmentGql: AddDepartmentGQL,
        private editDepartmentGql: EditDepartmentGQL
    ) {}

    getDepartments() {
        return this.departmentsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    getDepartment(departmentId: string) {
        return this.departmentGql
            .watch({ departmentId: departmentId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    addDepartment(department: Department) {
        return this.addDepartmentGql.mutate(department).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    editDepartment(department: Department) {
        return this.editDepartmentGql.mutate(department).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}
