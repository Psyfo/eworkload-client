import { SelectItem } from 'primeng/components/common/selectitem';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
    AcademicAdministrationActivity,
    AcademicAdministrationActivityInput,
    Qualification
} from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { QualificationService } from '../../../admin/qualification/qualification.service';
import { UserService } from '../../../admin/user/user.service';
import { AcademicAdministrationService } from '../academic-administration.service';

@Component({
    selector: 'app-add-academic-administration',
    templateUrl: './add-academic-administration.component.html',
    styleUrls: ['./add-academic-administration.component.scss'],
    animations: [routerTransition()]
})
export class AddAcademicAdministrationComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    activityModel: AcademicAdministrationActivity = {};
    userId = this.userService.currentUserIdStatic();
    dutyId = '46';
    activityInput: AcademicAdministrationActivityInput;
    titles = this.academicAdministrationService.titles;
    selectedTitle;
    qualifications: Qualification[] = [];
    selectedQualification: Qualification;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private academicAdministrationService: AcademicAdministrationService,
        private userService: UserService,
        private qualificationService: QualificationService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'academic-administration' },
            { label: 'add' }
        ];

        this.getQualifications();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getQualifications() {
        this.qualificationService
            .qualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                ({ data }) => {
                    this.qualifications = data.qualifications;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    onSubmit() {
        this.activityInput = {
            userId: this.userId,
            dutyId: this.dutyId,
            title: this.activityModel.title,
            description: this.activityModel.description
        };
    }
    onBack(event) {
        this.router.navigate(['activity/academic-administration']);
    }
    onReset(event) {}
}
