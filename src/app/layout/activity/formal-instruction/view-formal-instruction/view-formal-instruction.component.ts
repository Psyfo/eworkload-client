import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { FormalInstructionActivity } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';

@Component({
    selector: 'app-view-formal-instruction',
    templateUrl: './view-formal-instruction.component.html',
    styleUrls: ['./view-formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class ViewFormalInstructionComponent implements OnInit {
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
