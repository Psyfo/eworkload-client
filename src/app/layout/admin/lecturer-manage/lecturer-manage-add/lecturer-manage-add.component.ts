import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturerApi, Lecturer } from '../../../../../../sdk';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-lecturer-manage-add',
    templateUrl: './lecturer-manage-add.component.html',
    styleUrls: ['./lecturer-manage-add.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageAddComponent implements OnInit {
    lecturer: Lecturer;
    lectureName: string;
    lecturerAddForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi
    ) { }

    ngOnInit() {
        // Get the parameters and combine them both into a single observable
        const urlParams = combineLatest(
            this.activatedRoute.params,
            this.activatedRoute.queryParams,
            (params, queryParams) => ({ ...params, ...queryParams })
        );

        // Subscribe to the single observable, giving us both
        urlParams.subscribe(routeParams => {
            // routeParams containing both the query and route params
            this.lecturerApi.findById(routeParams.id)
                .subscribe(
                    (lecturerObject) => {
                        this.lecturer.lecturerId === routeParams.id;
                        console.log(lecturerObject);

                    },
                    (error) => {
                        console.log(error);

                    }
                );
        });
    }

}
