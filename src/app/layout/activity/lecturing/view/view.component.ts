import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, ActivityService } from '../../../../shared/services';
import { FormalInstructionActivity } from '../../../../shared/models';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
        private activityService: ActivityService
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
        this.activityService
            .getFormalInstructionActivity(this.activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activity = <FormalInstructionActivity>(
                    (<unknown>result.data.formalInstructionActivity)
                );
            });
    }

    onCancel() {
        this.router.navigate(['activity/lecturing']);
    }

    onEdit() {}
}
