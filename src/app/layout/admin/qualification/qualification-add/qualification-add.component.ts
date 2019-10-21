import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DepartmentService } from '../../department/department.service';
import { QualificationService } from '../qualification.service';
import { Department, QualificationInput } from 'src/app/shared/generated';

@Component({
    selector: 'app-qualification-add',
    templateUrl: './qualification-add.component.html',
    styleUrls: ['./qualification-add.component.scss'],
    animations: [routerTransition()]
})
export class QualificationAddComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    qualificationInput: QualificationInput = {};
    departments: Department[];
    selectedDepartment: Department;
    types = this.qualificationService.types;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private qualificationService: QualificationService,
        private departmentService: DepartmentService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'qualification', url: 'admin/qualification' },
            { label: 'add', url: 'admin/qualification/add' }
        ];
        this.getDepartments();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getDepartments() {
        this.departmentService
            .departments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.departments = result.data.departments;
            });
    }
    onSubmit() {
        this.qualificationService
            .addQualification(this.qualificationInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.alertService.success('Qualification added');
                    this.router.navigate(
                        [
                            'admin/qualification/view',
                            this.qualificationInput.qualificationId
                        ],
                        {
                            queryParams: {
                                qualificationId: this.qualificationInput
                                    .qualificationId
                            }
                        }
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['admin/qualification']);
    }
    onReset(event) {
        this.form.reset();
        this.ngOnInit();
    }
}
