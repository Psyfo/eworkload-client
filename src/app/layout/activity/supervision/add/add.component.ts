import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { Student, User, SupervisionActivity } from '../../../../shared/models';
import { ActivityService, UserService } from '../../../../shared/services';
import { StudentService } from '../../../../shared/services/student.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    user: User = new User();
    supervisionActivity: SupervisionActivity;
    student: Student = {
        studentId: 'Student ID goes here',
        email: 'Email goes here',
        firstName: 'Firstname here',
        lastName: 'Lastname here',
        title: 'Topic title here',
        year: 'Topic year here'
    };

    students: Student[];

    supervisionRoles = ['Main Supervisor', 'Co-Supervisor'];
    supervisionAddForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private studentService: StudentService,
        private activityService: ActivityService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.supervisionAddForm = this.fb.group({
            supervisionRole: '',
            studentId: ''
        });
        this.getUser();
        this.getStudents();
        this.getFormValue();
    }

    getFormValue() {
        this.supervisionAddForm.valueChanges.pipe().subscribe(value => {
            this.student.studentId = value.studentId;
            this.supervisionActivity.supervisionRole = value.supervisionRole.value;
        });
    }

    getUser() {
        this.userService.currentUser().subscribe(result => {
            this.user = <User>(<unknown>result.data.user);
        });
    }

    getStudents() {
        this.studentService.getStudents().subscribe(result => {
            this.students = result.data.students.map(student => student);
        });
    }

    onSubmit() {}
    onCancel() {
        this.router.navigate(['../activity/supervision']);
    }
    onReset() {
        this.supervisionAddForm.reset();
    }
}
