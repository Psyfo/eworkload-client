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
import { Faculty } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FacultyService {
    faculty: Faculty;
    faculties: Faculty[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
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
                    if(result.errors != undefined) {
                        this.errorService.toConsole(result.errors);
                        
                        return;
                    }
                    return result;
                })
            );
    }

    getFaculties() {
        return this.facultiesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    addFaculty(faculty) {
        return this.addFacultyGql.mutate(faculty).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Faculty added', 'success');
                return result;
            })
        );
    }

    editFaculty(faculty) {
        return this.editFacultyGql.mutate(faculty).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Faculty edited', 'success');
                return result;
            })
        );
    }

    deleteFaculty(faculty) {
        return this.deleteFacultyGql.mutate(faculty).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Faculty deleted', 'success');
                return result;
            })
        );
    }
}
