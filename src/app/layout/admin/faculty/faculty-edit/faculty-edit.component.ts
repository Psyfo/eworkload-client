import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Faculty } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { FacultyService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-faculty-edit',
    templateUrl: './faculty-edit.component.html',
    styleUrls: ['./faculty-edit.component.scss'],
    animations: [routerTransition()]
})
export class FacultyEditComponent implements OnInit {
    // Properties
    faculty: Faculty;

    facultyEditForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private facultyService: FacultyService
    ) {}

    ngOnInit() {
        // Get ID from route
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.buildForm(result.facultyId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Getters
    get facultyId() {
        return this.facultyEditForm.get('facultyId');
    }
    get name() {
        return this.facultyEditForm.get('name');
    }
    get formVal() {
        return this.facultyEditForm.getRawValue();
    }

    // Methods
    buildForm(facultyId: string) {
        this.facultyEditForm = this.fb.group({
            facultyId: [{ value: '', disabled: true }, Validators.required],
            name: ['', Validators.required]
        });

        this.facultyService.getFaculty(facultyId).subscribe(result => {
            this.faculty = result.data.faculty;

            this.facultyEditForm.patchValue({
                facultyId: this.faculty.facultyId,
                name: this.faculty.name
            });
        });
    }

    onEdit() {
        this.faculty = this.formVal;
        this.facultyService
            .editFaculty(this.faculty)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Faculty edited');
                this.router.navigate(
                    ['admin/faculty/view', this.facultyId.value],
                    {
                        queryParams: {
                            facultyId: this.facultyId.value
                        }
                    }
                );
            });
    }

    onCancel() {
        this.router.navigate(['admin/faculty/view', this.facultyId.value], {
            queryParams: {
                facultyId: this.facultyId.value
            }
        });
    }
}
