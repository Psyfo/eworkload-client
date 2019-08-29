import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AcademicAdministrationActivityInput } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { UserService } from '../../../admin/user/user.service';
import { AcademicAdministrationService } from '../academic-administration.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-add-academic-administration',
    templateUrl: './add-academic-administration.component.html',
    styleUrls: ['./add-academic-administration.component.scss'],
    animations: [routerTransition()]
})
export class AddAcademicAdministrationComponent implements OnInit {
    breadcrumbs: MenuItem[];

    activity: AcademicAdministrationActivityInput = {};
    titles = this.academicAdministrationService.titles;

    addAcademicAdministrationForm: FormGroup;
    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private academicAdministrationService: AcademicAdministrationService,
        private fb: FormBuilder,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'academic-administration' },
            { label: 'add' }
        ];
        this.buildForm();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    buildForm() {
        this.addAcademicAdministrationForm = this.fb.group({
            userId: [{ value: '', disabled: true }, [Validators.required]],
            dutyId: [{ value: '', disabled: true }, [Validators.required]],
            title: ['', [Validators.required]],
            description: ['']
        });
        this.addAcademicAdministrationForm.patchValue({
            userId: this.userService.currentUserIdStatic(),
            dutyId: '46'
        });
    }
    get userId() {
        return this.addAcademicAdministrationForm.get('userId');
    }
    get dutyId() {
        return this.addAcademicAdministrationForm.get('dutyId');
    }
    get title() {
        return this.addAcademicAdministrationForm.get('title');
    }
    get description() {
        return this.addAcademicAdministrationForm.get('description');
    }

    onAdd() {
        this.activity.userId = this.userId.value;
        this.activity.dutyId = this.dutyId.value;
        const selectedTitle = this.title.value;
        this.activity.title = selectedTitle.value;
        this.activity.description = this.description.value;

        this.academicAdministrationService
            .addAcademicAdministrationActivity(this.activity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
        this.alertService.successToast('Activity added');
        this.router.navigate(['activity/academic-administration']);
    }
    onBack(event) {}
    onReset(event) {}
}
