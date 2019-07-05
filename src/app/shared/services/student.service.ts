import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddStudentGQL,
    DeleteStudentGQL,
    EditStudentGQL,
    StudentGQL,
    StudentsGQL
} from '../generated/output';
import { Student, StudentInput } from '../models';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    student: Student;
    students: Student[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private studentGql: StudentGQL,
        private studentsGql: StudentsGQL,
        private editStudentGql: EditStudentGQL,
        private addStudentGql: AddStudentGQL,
        private deleteStudentGql: DeleteStudentGQL
    ) {}

    getStudent(studentId: string) {
        return this.studentGql
            .watch({ studentId: studentId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getStudents() {
        return this.studentsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    addStudent(student: StudentInput) {
        return this.addStudentGql.mutate({ student: student }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editStudent(student: StudentInput) {
        return this.editStudentGql.mutate({ student: student }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteStudent(student: StudentInput) {
        return this.deleteStudentGql.mutate({ student: student }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
