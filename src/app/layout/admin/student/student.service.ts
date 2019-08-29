import { map } from 'rxjs/operators';
import {
    AddStudentGQL,
    DeleteStudentGQL,
    EditStudentGQL,
    StudentGQL,
    StudentInput,
    StudentsGQL
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
            .valueChanges.pipe(
                map(result => {
                    return result;
                })
            );
    }

    students() {
        return this.studentsGql
            .watch({}, { pollInterval: 2000 })
            .valueChanges.pipe(
                map(result => {
                    return result;
                })
            );
    }

    addStudent(student: StudentInput) {
        return this.addStudentGql.mutate({ student: student }).pipe(
            map(result => {
                return result;
            })
        );
    }

    editStudent(student: StudentInput) {
        return this.editStudentGql.mutate({ student: student }).pipe(
            map(result => {
                return result;
            })
        );
    }

    deleteStudent(student: StudentInput) {
        return this.deleteStudentGql.mutate({ student: student }).pipe(
            map(result => {
                return result;
            })
        );
    }
}
