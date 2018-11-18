import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { User, Department, Qualification, Position } from '../../../shared/models';
import { UserService } from '../../../shared/services/user.service';
import { routerTransition } from '../../../router.animations';
import { DepartmentService, QualificationService } from '../../../shared';
import { PositionService } from '../../../shared/services/position.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProfileEditComponent implements OnInit {
    editUserId: number = parseInt(localStorage.getItem('editUserId'));
    user: User;
    subUser: any;
    users: User[];
    departments: Department[];
    qualifications: Qualification[];
    positions: Position[];
    loading = false;
    submitted = false;
    returnUrl: string;

    profileForm: FormGroup;

    constructor(
        private flashMessagesService: FlashMessagesService,
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private departmentService: DepartmentService,
        private qualificationService: QualificationService,
        private positionService: PositionService,
    ) { }

    ngOnInit() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    this.users = data;
                    console.log(data);
                },
                error => {
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                    console.log(error);
                }
            );
        // this.userService.getById(this.editUserId)
        //     .pipe(first())
        //     .subscribe(
        //         user => {
        //             this.subUser = user;
        //             console.log(this.user);
        //         },
        //         error => {
        //             this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
        //             console.log(error);

        //         }
        //     );
        this.departmentService.getAll()
            .pipe(first())
            .subscribe(
                data => {
                    this.departments = data;
                    console.log(data);
                },
                error => {
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                    console.log(error);
                }
            );

        this.qualificationService.getAll()
            .pipe(first())
            .subscribe(data => {
                this.qualifications = data;
                console.log(data);
            },
                error => {
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                    console.log(error);
                }
            );

        this.positionService.getAll()
            .pipe(first())
            .subscribe(data => {
                this.positions = data;
                console.log(data);
            },
                error => {
                    this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
                    console.log(error);
                }
            );


        this.initForm();

        // this.userService.getById(this.editUserId)
        //     .pipe(first())
        //     .subscribe(data => {
        //         this.profileForm.patchValue(data);
        //         console.log(data);
        //     },
        //         error => {
        //             this.flashMessagesService.show(error, { cssClass: 'alert-danger' });
        //             console.log(error);
        //         }
        //     );
    }

    get f() { return this.profileForm.controls; }

    onUpdate() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.profileForm.invalid) {
            this.flashMessagesService.show('Form is not valid!', { cssClass: 'alert-danger' });
            return;
        }
    }

    onSelectQualification() {

    }

    onSelectDepartment() {

    }

    onSelectPosition() {

    }

    private initForm() {

    }

}
