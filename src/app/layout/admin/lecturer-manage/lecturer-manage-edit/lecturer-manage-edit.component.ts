import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Lecturer, LecturerApi } from '../../../../../../sdk';
import { routerTransition } from '../../../../router.animations';


@Component({
    selector: 'app-lecturer-manage-edit',
    templateUrl: './lecturer-manage-edit.component.html',
    styleUrls: ['./lecturer-manage-edit.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageEditComponent implements OnInit {
    lecturer: Lecturer;
    lectureName: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi
    ) { }

    ngOnInit() {
        // Combine them both into a single observable
        const urlParams = combineLatest(
            this.activatedRoute.params,
            this.activatedRoute.queryParams,
            (params, queryParams) => ({ ...params, ...queryParams})
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
