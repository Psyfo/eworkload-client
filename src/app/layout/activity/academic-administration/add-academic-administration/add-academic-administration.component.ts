import { MenuItem } from 'primeng/api/menuitem';
import { SelectItem } from 'primeng/api/selectitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';

import {
    Component,
    ElementRef,
    OnInit,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
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
    @ViewChild('f', { read: NgForm }) form: NgForm;

    activityModel: AcademicAdministrationActivity = {};
    userId = this.userService.currentUserIdStatic();
    dutyId = '46';
    activityInput: AcademicAdministrationActivityInput;
    titles = this.academicAdministrationService.titles;
    selectedTitle;
    qualifications: Qualification[] = [];
    selectedQualification: Qualification;
    isSubmitting: boolean;

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
                    this.qualifications = data.qualifications.map(
                        qualification => {
                            const label = `${qualification.qualificationId} - ${qualification.name}`;
                            let model: any = qualification;
                            model.label = label;
                            return model;
                        }
                    );
                },
                err => {
                    console.warn(err);
                }
            );
    }

    onSubmit() {
        this.isSubmitting = true;

        this.activityInput = {
            activityId: this.activityModel.activityId,
            userId: this.userId,
            dutyId: this.dutyId,
            title: this.selectedTitle.label,
            description: this.activityModel.description
        };

        // If qualification field required
        if (
            this.selectedTitle.value === '0' ||
            this.selectedTitle.value === '1'
        ) {
            this.activityInput.qualificationId = this.selectedQualification.qualificationId;
        }

        this.academicAdministrationService
            .addAcademicAdministrationActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.isSubmitting = false;
                this.alertService.successToast('Activity added');
                this.router.navigate(['activity/academic-administration']);
            });
    }
    onBack(event) {
        this.router.navigate(['activity/academic-administration']);
    }
    onReset(event) {
        this.form.reset();
    }
}
