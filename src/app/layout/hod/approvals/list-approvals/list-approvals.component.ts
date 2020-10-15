import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormalInstructionService } from 'src/app/layout/activity/formal-instruction/formal-instruction.service';
import { routerTransition } from 'src/app/router.animations';
import { Activity } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormalInstructionActivity,
  ResearchActivity
} from '../../../../shared/generated/output';
import { ActivityService } from '../../../activity/activity.service';
import { ResearchService } from '../../../activity/research/research.service';

@Component({
  selector: 'app-list-approvals',
  templateUrl: './list-approvals.component.html',
  styleUrls: ['./list-approvals.component.scss'],
  animations: [routerTransition()]
})
export class ListApprovalsComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean;

  selectedResearchActivity: ResearchActivity;
  researchActivities: ResearchActivity[];
  selectedFormalInstructionActivity: FormalInstructionActivity;
  formalInstructionActivities: FormalInstructionActivity[];

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private researchService: ResearchService,
    private formalInstructionService: FormalInstructionService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'activity', url: 'admin/activity' }
    ];
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
      }
    ];
    this.cols = [
      { field: 'duty.dutyId', header: 'Activity ID' },
      { field: 'user.userId', header: 'Name' },
      { field: 'approvalStatus', header: 'Approval Status' }
    ];
    this.getResearchActivities();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  getResearchActivities() {
    this.researchService
      .researchActivities()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.loading = result.loading;
          this.researchActivities = result.data.researchActivities;
        },
        (err) => {
          this.alertService.errorToast(err);
        }
      );
  }
  onAdd() {
    this.router.navigate(['admin/activity/add']);
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedResearchActivity.activityId} selected`
    );

    this.router.navigate(
      ['admin/activity/edit', this.selectedResearchActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedResearchActivity.activityId
        }
      }
    );
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedResearchActivity.activityId} selected`
    );

    this.router.navigate(
      ['admin/activity/edit', this.selectedResearchActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedResearchActivity.activityId
        }
      }
    );
  }

  onRowSelect(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedResearchActivity.activityId} selected`
    );
    this.router.navigate(
      ['admin/activity/view', this.selectedResearchActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedResearchActivity.activityId
        }
      }
    );
  }
  onDelete() {}
}
