import { map } from 'rxjs/operators';
import {
    AddDepartmentGQL,
    DeleteDepartmentGQL,
    DepartmentGQL,
    DepartmentInput,
    DepartmentsGQL,
    EditDepartmentGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private departmentGql: DepartmentGQL,
        private departmentsGql: DepartmentsGQL,
        private addDepartmentGql: AddDepartmentGQL,
        private editDepartmentGql: EditDepartmentGQL,
        private deleteDepartmentGql: DeleteDepartmentGQL
    ) {}

    getDepartments() {
        return this.departmentsGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
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
            .watch(
                { departmentId: departmentId },
                {
                    pollInterval: 2000
                }
            )
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
