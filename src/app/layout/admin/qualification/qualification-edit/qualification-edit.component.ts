import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department, QualificationInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Qualification } from '../../../../shared/generated/output';
import { DepartmentService } from '../../department/department.service';
import { QualificationService } from '../qualification.service';

@Component({
    selector: 'app-qualification-edit',
    templateUrl: './qualification-edit.component.html',
    styleUrls: ['./qualification-edit.component.scss']
})
export class QualificationEditComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    qualification: Qualification;
    qualificationInput: QualificationInput = {};
    departments: Department[] = [];
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
            { label: 'edit', url: 'admin/qualification/edit' }
        ];
        this.getDepartments();
        this.getRouteParams();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getRouteParams() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                const qualificationId = result.get('qualificationId');
                this.getQualification(qualificationId);
            });
    }
    getDepartments() {
        this.departmentService
            .departments()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.departments = result.data.departments;
            });
    }
    getQualification(qualificationId: string) {
        this.qualificationService
            .qualification(qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.qualification = result.data.qualification;
                    this.qualificationInput = {
                        qualificationId: this.qualification.qualificationId,
                        name: this.qualification.name,
                        type: this.qualification.type,
                        departmentId: this.qualification.departmentId
                    };
                    this.selectedDepartment = this.departments.find(
                        department =>
                            department.departmentId ===
                            this.qualification.departmentId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    public onSubmit() {}
    public onBack(event) {
        this.router.navigate(['admin/qualification']);
    }
    public onReset(event) {
        this.form.reset();
        this.qualificationInput = {};
        this.selectedDepartment = null;
        this.getRouteParams();
    }
}
