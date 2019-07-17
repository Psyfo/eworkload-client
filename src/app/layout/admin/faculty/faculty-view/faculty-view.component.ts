import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Faculty } from 'src/app/shared/generated/output';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import { FacultyService } from '../../../../shared/services';

@Component({
    selector: 'app-faculty-view',
    templateUrl: './faculty-view.component.html',
    styleUrls: ['./faculty-view.component.scss'],
    animations: [routerTransition()]
})
export class FacultyViewComponent implements OnInit {
    facultyId: string;
    faculty: Faculty;

    private unsubscribe = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.facultyId = result.facultyId;
                this.getFaculty(this.facultyId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getFaculty(facultyId: string) {
        this.facultyService.getFaculty(facultyId).subscribe(result => {
            this.faculty = result.data.faculty;
        });
    }
    onEdit() {
        this.router.navigate(['admin/faculty/edit', this.facultyId], {
            queryParams: {
                facultyId: this.facultyId
            }
        });
    }
    onDelete() {
        this.router.navigate(['admin/faculty/delete', this.facultyId]);
    }
    onCancel() {
        this.router.navigate(['../admin/faculty']);
    }
}
