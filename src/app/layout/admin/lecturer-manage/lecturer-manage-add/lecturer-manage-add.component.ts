import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { combineLatest, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturerApi, Lecturer, LoopBackConfig } from '../../../../../../sdk';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-lecturer-manage-add',
    templateUrl: './lecturer-manage-add.component.html',
    styleUrls: ['./lecturer-manage-add.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageAddComponent implements OnInit {
    lecturer: Lecturer;
    lecturerAddForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi,
        private flashMessages: FlashMessagesService
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

    ngOnInit() {
        // reactive form structure
        this.lecturerAddForm = new FormGroup({
            'lecturerId': new FormControl(null, [Validators.required]),
            'name': new FormGroup({
                'firstName': new FormControl(null, [Validators.required]),
                'lastName': new FormControl(null, [Validators.required]),
            }),
            'email': new FormControl(null, [Validators.required, Validators.email]),
        });
    }

    onAdd() {
        // generic password
        this.lecturer = this.lecturerAddForm.value as Lecturer;
        this.lecturer.password = 'Password01';

        this.lecturerApi.create(this.lecturer)
        .subscribe(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
                this.flashMessages.show(error.status, {cssClass: 'alert-danger'});
                this.flashMessages.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

    onCancel() {
        this.router.navigate(['../lecturer-manage']);
    }


    accountExists(control: FormControl) {
        return this.lecturerApi.exists(control.value)
        .subscribe(
            (response) => {
                if(response === true){
                    console.log('Response is: ' + response);

                    return {'lecturerExists': true};
                }
            },
            (error) => {
                console.log(error);
                this.flashMessages.show(error.status, {cssClass: 'alert-danger'});
                this.flashMessages.show(error.message, {cssClass: 'alert-danger'});
            }
        );
    }

}
