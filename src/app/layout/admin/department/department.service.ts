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

    departments() {
        return this.departmentsGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    department(departmentId: string) {
        return this.departmentGql
            .watch(
                { departmentId: departmentId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    addDepartment(department: DepartmentInput) {
        return this.addDepartmentGql
            .mutate({ department: department })
            .pipe(map(result => result, err => err));
    }

    editDepartment(department: DepartmentInput) {
        return this.editDepartmentGql
            .mutate({ department: department })
            .pipe(map(result => result, err => err));
    }

    deleteDepartment(department: DepartmentInput) {
        console.log('dept del model:', department);

        return this.deleteDepartmentGql
            .mutate({ department: department })
            .pipe(map(result => result, err => err));
    }
}
