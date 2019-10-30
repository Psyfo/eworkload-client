import { map } from 'rxjs/operators';
import {
    AddFacultyGQL,
    DeleteFacultyGQL,
    EditFacultyGQL,
    FacultiesGQL,
    FacultyGQL,
    FacultyInput
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private facultyGql: FacultyGQL,
        private facultiesGql: FacultiesGQL,
        private editFacultyGql: EditFacultyGQL,
        private addFacultyGql: AddFacultyGQL,
        private deleteFacultyGql: DeleteFacultyGQL
    ) {}

    getFaculty(facultyId: string) {
        return this.facultyGql
            .watch(
                { facultyId: facultyId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    getFaculties() {
        return this.facultiesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    addFaculty(faculty: FacultyInput) {
        return this.addFacultyGql
            .mutate({ faculty: faculty })
            .pipe(map(result => result, err => err));
    }

    editFaculty(faculty: FacultyInput) {
        return this.editFacultyGql
            .mutate({ faculty: faculty })
            .pipe(map(result => result, err => err));
    }

    deleteFaculty(faculty: FacultyInput) {
        return this.deleteFacultyGql
            .mutate({ faculty: faculty })
            .pipe(map(result => result, err => err));
    }
}
