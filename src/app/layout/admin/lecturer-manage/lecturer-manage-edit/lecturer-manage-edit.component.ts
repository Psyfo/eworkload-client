import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lecturer, LecturerApi } from '../../../../../../sdk';
import { routerTransition } from '../../../../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
    selector: 'app-lecturer-manage-edit',
    templateUrl: './lecturer-manage-edit.component.html',
    styleUrls: ['./lecturer-manage-edit.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageEditComponent implements OnInit {
    lecturer: Lecturer;
    lectureName: string;
    lecturerEditForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi,
        private flashMessages: FlashMessagesService
    ) { }

    ngOnInit() {
        // reactive form template
        this.lecturerEditForm = new FormGroup({
            'lecturerId': new FormControl(null, [Validators.required]),
            'name': new FormGroup({
                'firstName': new FormControl(null, [Validators.required]),
                'lastName': new FormControl(null, [Validators.required]),
            }),
            'email': new FormControl(null, [Validators.required, Validators.email]),
        });

        // Combine them both into a single observable
        const urlParams = combineLatest(
            this.activatedRoute.params,
            this.activatedRoute.queryParams,
            (params, queryParams) => ({ ...params, ...queryParams })
        );

        // Subscribe to the single observable, giving us both
        urlParams.subscribe(routeParams => {
            // routeParams containing both the query and route params
            this.lecturerApi.findById<Lecturer>(routeParams.id)
                .subscribe(
                    (lecturerObject) => {
                        lecturerObject.lecturerId === routeParams.id;
                        console.log(lecturerObject);
                        // patch with Lecturer data
                        this.lecturerEditForm.patchValue(lecturerObject as Lecturer);
                    },
                    (error) => {
                        console.log(error);

                    }
                );
        });
    }

    onEdit() {
        // generic password
        this.lecturer = this.lecturerEditForm.value as Lecturer;

        this.lecturerApi.patchOrCreate(this.lecturer)
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

    onReset() {
        this.lecturerEditForm.reset();
    }

}
