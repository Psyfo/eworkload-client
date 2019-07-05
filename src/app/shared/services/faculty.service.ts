import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import {
    FacultyGQL,
    FacultiesGQL,
    EditFacultyGQL,
    AddFacultyGQL,
    DeleteFacultyGQL
} from '../generated/output';
import { Faculty, FacultyInput } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    faculty: Faculty;
    faculties: Faculty[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private facultyGql: FacultyGQL,
        private facultiesGql: FacultiesGQL,
        private editFacultyGql: EditFacultyGQL,
        private addFacultyGql: AddFacultyGQL,
        private deleteFacultyGql: DeleteFacultyGQL
    ) {}

    getFaculty(facultyId: string) {
        return this.facultyGql
            .watch({ facultyId: facultyId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getFaculties() {
        return this.facultiesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    addFaculty(faculty: FacultyInput) {
        return this.addFacultyGql.mutate({ faculty: faculty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editFaculty(faculty: FacultyInput) {
        return this.editFacultyGql.mutate({ faculty: faculty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteFaculty(faculty: FacultyInput) {
        return this.deleteFacultyGql.mutate({ faculty: faculty }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
