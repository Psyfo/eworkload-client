import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import { StudentGQL, StudentsGQL, EditStudentGQL, AddStudentGQL, DeleteStudentGQL } from '../generated/output';
import { map } from 'rxjs/operators';
import { Student } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    student: Student;
    students: Student[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
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
                    if (result.errors != undefined) {
                        this.errorService.toConsole(result.errors);

                        return;
                    }
                    return result;
                })
            );
    }

    getStudents() {
        return this.studentsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    addStudent(student) {
        return this.addStudentGql.mutate(student).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Student added', 'success');
                return result;
            })
        );
    }

    editStudent(student) {
        return this.editStudentGql.mutate(student).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Student edited', 'success');
                return result;
            })
        );
    }

    deleteStudent(student) {
        return this.deleteStudentGql.mutate(student).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Student deleted', 'success');
                return result;
            })
        );
    }
}
