import { map } from 'rxjs/operators';
import {
    AddStudentGQL,
    DeleteStudentGQL,
    EditStudentGQL,
    StudentGQL,
    StudentInput,
    StudentsGQL,
    StudentsUnassignedGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private studentGql: StudentGQL,
        private studentsGql: StudentsGQL,
        private studentsUnassignedGql: StudentsUnassignedGQL,
        private editStudentGql: EditStudentGQL,
        private addStudentGql: AddStudentGQL,
        private deleteStudentGql: DeleteStudentGQL
    ) {}

    student(studentId: string) {
        return this.studentGql
            .watch(
                { studentId: studentId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    students() {
        return this.studentsGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(map(result => result, err => err));
    }

    studentsUnassigned(userId: string) {
        return this.studentsUnassignedGql
            .watch({ userId: userId }, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    addStudent(student: StudentInput) {
        return this.addStudentGql
            .mutate({ student: student })
            .pipe(map(result => result, err => err));
    }

    editStudent(student: StudentInput) {
        return this.editStudentGql
            .mutate({ student: student })
            .pipe(map(result => result, err => err));
    }

    deleteStudent(student: StudentInput) {
        return this.deleteStudentGql
            .mutate({ student: student })
            .pipe(map(result => result, err => err));
    }
}
