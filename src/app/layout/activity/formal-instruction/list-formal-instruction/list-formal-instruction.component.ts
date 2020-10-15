import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
  Block,
  FormalInstructionActivity,
  Module,
  FormalInstructionActivityInput
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';
import { throwServerError } from 'apollo-link-http-common';

@Component({
  selector: 'app-list-formal-instruction',
  templateUrl: './list-formal-instruction.component.html',
  styleUrls: ['./list-formal-instruction.component.scss'],
  animations: [routerTransition()]
})
export class ListFormalInstructionComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean;

  activities: FormalInstructionActivity[];
  activity: FormalInstructionActivity;
  blocks: Block[];
  fiWorkloadData: any;
  modules: Module[];
  selectedActivity: FormalInstructionActivity;
  selectedWorkload: any;
  userId: string = this.userService.currentUserIdStatic();
  statuses = [
    { label: 'Awaiting' },
    { label: 'Approved' },
    { label: 'Review' }
  ];

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private formalInstructionService: FormalInstructionService,
    private userService: UserService,
    private workloadService: WorkloadService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'activity' }, { label: 'formal-instruction' }];
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
      { field: 'moduleLabel', header: 'Module' },
      { field: 'groupLabel', header: 'Group Code' },
      { field: 'blockLabel', header: 'Block' },
      { field: 'offeringTypeLabel', header: 'Offering Type' },
      { field: 'qualificationLabel', header: 'Qualification' },
      { field: 'studentsEnrolledLabel', header: 'Students Enrolled' },
      { field: 'isCoordinatorLabel', header: 'Coordinator?' }
    ];

    this.getActivities();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  onAdd() {
    this.router.navigate(['activity/formal-instruction/add']);
  }

  getActivities() {
    this.formalInstructionService
      .formalInstructionActivitiesByUser(this.userId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.loading = result.loading;
          this.activities = result.data.formalInstructionActivitiesByUser.map(
            (activity) => {
              let mod: any = activity;
              mod.groupLabel = `${activity.group.groupId}`;
              mod.moduleLabel = `${activity.group.module.moduleId} - ${activity.group.module.name}`;
              mod.blockLabel = `${activity.group.module.block.name} (${activity.group.module.block.blockId})`;
              mod.offeringTypeLabel = `${activity.group.module.offeringType.description} (${activity.group.module.offeringType.offeringTypeId})`;
              mod.qualificationLabel = `${activity.group.module.qualification.name} (${activity.group.module.qualification.qualificationId})`;
              mod.studentsEnrolledLabel = `${activity.group.module.studentsEnrolled}`;
              mod.isCoordinatorLabel = activity.isCoordinator
                ? 'True'
                : 'False';

              return mod;
            }
          );
        },
        (err) => {
          console.warn(err);
        }
      );
  }

  onContextView(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedActivity.activityId} selected`
    );

    this.router.navigate(
      ['activity/formal-instruction/view', this.selectedActivity.activityId],
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
      ['activity/formal-instruction/edit', this.selectedActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedActivity.activityId
        }
      }
    );
  }
  onContextDelete(event) {
    this.alertService.confirm('formalInstructionActivityDelete');
  }
  onReject() {
    this.alertService.clear();
  }
  onConfirm() {
    this.alertService.clear();
    const activityInput: FormalInstructionActivityInput = {
      activityId: this.selectedActivity.activityId
    };
    this.formalInstructionService
      .deleteFormalInstructionActivity(activityInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {},
        (err) => {
          console.error(err);
        }
      );
    this.alertService.successToast('Activity Deleted');
  }
  onRowSelect(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedActivity.activityId} selected`
    );
    this.router.navigate(
      ['activity/formal-instruction/view', this.selectedActivity.activityId],
      {
        queryParams: {
          activityId: this.selectedActivity.activityId
        }
      }
    );
  }
}
