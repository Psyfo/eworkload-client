import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { DutyInput } from 'src/app/shared/generated';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Duty } from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { DutyService } from '../duty.service';

@Component({
    selector: 'app-edit-duty',
    templateUrl: './edit-duty.component.html',
    styleUrls: ['./edit-duty.component.scss'],
    animations: [routerTransition()]
})
export class EditDutyComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    originalDuty: Duty;
    duty: DutyInput = {};

    unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dutyService: DutyService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const dutyId = result.get('dutyId');
                    this.getDuty(dutyId);
                    this.breadcrumbs = [
                        {
                            label: 'admin'
                        },
                        { label: 'duty' },
                        { label: 'edit' },
                        { label: 'dutyId' }
                    ];
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getDuty(dutyId: string) {
        this.dutyService
            .duty(dutyId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.originalDuty = result.data.duty;
                    this.duty = {
                        dutyId: this.originalDuty.dutyId,
                        name: this.originalDuty.name,
                        description: this.originalDuty.description
                    };
                },
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    onSubmit() {
        this.dutyService
            .editDuty(this.duty)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['admin/duty']);
    }
    onReset(event) {
        this.form.reset();
        this.ngOnInit();
    }
}
