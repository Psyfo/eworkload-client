import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddDepartmentGQL,
    DeleteDepartmentGQL,
    DepartmentGQL,
    DepartmentsGQL,
    EditDepartmentGQL
} from '../generated/output';
import { Department, DepartmentInput } from '../models';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    department: Department;
    departments: Department[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private departmentGql: DepartmentGQL,
        private departmentsGql: DepartmentsGQL,
        private addDepartmentGql: AddDepartmentGQL,
        private editDepartmentGql: EditDepartmentGQL,
        private deleteDepartmentGql: DeleteDepartmentGQL
    ) {}

    getDepartments() {
        return this.departmentsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
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
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    addDepartment(department: DepartmentInput) {
        return this.addDepartmentGql.mutate({ department: department }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editDepartment(department: DepartmentInput) {
        return this.editDepartmentGql.mutate({ department: department }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteDepartment(department: DepartmentInput) {
        console.log('dept del model:', department);

        return this.deleteDepartmentGql.mutate({ department: department }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
