import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivityService } from '../../../../shared/services';
import { Activity } from '../../../../shared/models';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    animations: [routerTransition()],
})
export class ListComponent implements OnInit {
    activity: Activity;
    activities: Activity[];

    private unsubscribe = new Subject();

    constructor(private activityService: ActivityService) {}

    ngOnInit() {
        this.activityService
            .getUnapprovedActivities()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activities = result.data.unapprovedActivities.map(
                    activity => <Activity>(<unknown>activity)
                );
            });
    }
}
