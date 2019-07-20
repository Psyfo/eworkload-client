import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormalInstructionActivity } from 'src/app/shared/generated/output';
import { AlertService } from 'src/app/shared/modules';
import { FormalInstructionService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    animations: [routerTransition()]
})
export class ViewComponent implements OnInit {
    activityId: string;
    activity: FormalInstructionActivity;

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private formalInstructionService: FormalInstructionService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activityId = result.activityId;
                this.getActivity();
            });
    }

    getActivity() {
        this.formalInstructionService
            .formalInstructionActivity(this.activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activity = result.data.formalInstructionActivity;
            });
    }

    onCancel() {
        this.router.navigate(['activity/lecturing']);
    }

    onEdit() {}
}
