import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  ResearchActivity,
  ResearchActivityInput
} from '../../../../shared/generated/output';
import { AlertService } from '../../../../shared/modules/alert/alert.service';
import { ResearchService } from '../research.service';

@Component({
  selector: 'app-list-research',
  templateUrl: './list-research.component.html',
  styleUrls: ['./list-research.component.scss'],
  animations: [routerTransition()]
})
export class ListResearchComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: true;

  activities: ResearchActivity[];
  selectedActivity: ResearchActivity;

  private unsubscribe = new Subject();
  constructor(
    private alertService: AlertService,
    private router: Router,
    private userService: UserService,
    private researchService: ResearchService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'activity' }, { label: 'research' }];
    this.menuItems = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: (event) => this.onContextView(event)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: (event) => this.onContextEdit(event)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.onContextDelete(event)
      }
    ];
    this.cols = [
      { field: 'output', header: 'Research Output' },
      { field: 'title', header: 'Title' },
      { field: 'details', header: 'Additional Details' },
      { field: 'evidence', header: 'Evidence' }
    ];

    this.getActivities();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onAdd() {
    this.router.navigate(['activity/research/add']).catch((error) => {
      this.alertService.errorToast(`Routing Error: ${error}`);
    });
  }
  getActivities() {
    this.researchService
      .researchActivitiesByUser(this.userId())
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.activities = result.data.researchActivitiesByUser;
        },
        (error) => {
          this.alertService.errorToast(error, 'errorToast');
        }
      );
  }
  userId() {
    return this.userService.currentUserIdStatic();
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedActivity.activityId} selected`
    );

    this.router.navigate(
      ['activity/research/view', this.selectedActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedActivity.activityId
        }
      }
    );
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedActivity.activityId} selected`
    );

    this.router.navigate(
      ['activity/research/edit', this.selectedActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedActivity.activityId
        }
      }
    );
  }
  onContextDelete(event) {
    this.alertService.confirm('researchActivityDelete');
  }
  onReject() {
    this.alertService.clear();
  }
  onConfirm() {
    this.alertService.clear();
    const activityInput: ResearchActivityInput = {
      activityId: this.selectedActivity.activityId
    };
    this.researchService
      .deleteResearchActivity(activityInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {},
        (err) => {
          this.alertService.errorToast(err, 'errorToast');
        }
      );
    this.alertService.successToast('Activity Deleted');
  }
  onRowSelect(event) {
    const activityData: ResearchActivity = event.data;
    console.log(activityData);

    this.alertService.infoToast(
      `Activity: ${this.selectedActivity.activityId} selected`
    );
    this.router.navigate(
      ['activity/research/view', this.selectedActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedActivity.activityId
        }
      }
    );
  }
}
