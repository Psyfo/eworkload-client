import { SelectItem } from 'primeng/components/common/selectitem';
import { routerTransition } from 'src/app/router.animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { NgForm } from '@angular/forms';
import {
    AcademicAdministrationActivity,
    AcademicAdministrationActivityInput,
    Qualification
} from 'src/app/shared/generated';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/shared/modules';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicAdministrationService } from '../academic-administration.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-edit-academic-administration',
    templateUrl: './edit-academic-administration.component.html',
    styleUrls: ['./edit-academic-administration.component.scss'],
    animations: [routerTransition()]
})
export class EditAcademicAdministrationComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false, read: NgForm }) form: NgForm;

    activityModel: AcademicAdministrationActivity = {};
    userId = this.userService.currentUserIdStatic();
    dutyId = '46';
    activityInput: AcademicAdministrationActivityInput;
    titles = this.academicAdministrationService.titles;
    selectedTitle: SelectItem;
    qualifications: Qualification[] = [];
    selectedQualification: Qualification;
    isSubmitting: boolean;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
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
        this.getActivity();
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
    getActivity() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const activityId = result.get('activityId');
                    this.academicAdministrationService
                        .academicAdministrationActivity(activityId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.activityModel =
                                    result.data.academicAdministrationActivity;
                                this.selectedQualification = this.qualifications.find(
                                    qualification =>
                                        qualification.qualificationId ===
                                        this.activityModel.qualificationId
                                );
                                this.selectedTitle = this.titles.find(
                                    title =>
                                        title.label === this.activityModel.title
                                );
                            },
                            err => {
                                console.error(err);
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
            .editAcademicAdministrationActivity(this.activityInput)
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
        this.getActivity();
        this.form.form.markAsPristine();
    }
}
