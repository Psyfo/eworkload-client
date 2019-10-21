import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Faculty } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { FacultyService } from '../faculty.service';

@Component({
    selector: 'app-faculty-list',
    templateUrl: './faculty-list.component.html',
    styleUrls: ['./faculty-list.component.scss'],
    animations: [routerTransition()]
})
export class FacultyListComponent implements OnInit {
    faculties: Faculty[];

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private renderer: Renderer,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    getFaculties(): void {
        this.facultyService
            .getFaculties()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.faculties = result.data.faculties.map(
                        faculty => <Faculty>(<unknown>faculty)
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onAddFaculty() {
        this.router.navigate(['admin/faculty/add']);
    }
}
