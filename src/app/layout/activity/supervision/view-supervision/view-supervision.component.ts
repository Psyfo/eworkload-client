import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SupervisionActivity } from '../../../../shared/generated/output';
import { SupervisionService } from '../supervision.service';

@Component({
    selector: 'app-view-supervision',
    templateUrl: './view-supervision.component.html',
    styleUrls: ['./view-supervision.component.scss']
})
export class ViewSupervisionComponent implements OnInit {
    breadcrumbs: MenuItem[];

    activityId: string;
    activity: SupervisionActivity;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private supervisionService: SupervisionService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'supervision' },
            { label: 'add' }
        ];
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(params => {
                this.activityId = params.get('activityId');
                this.getActivity(this.activityId);
            });
    }

    getActivity(activityId: string) {
        this.supervisionService
            .supervisionActivity(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activity = result.data.supervisionActivity;
                console.log(this.activity);
            });
    }
}
