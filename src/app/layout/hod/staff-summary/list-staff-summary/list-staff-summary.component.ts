import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';
import { WorkloadService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/layout/admin/user/user.interface';

@Component({
  selector: 'app-list-staff-summary',
  templateUrl: './list-staff-summary.component.html',
  styleUrls: ['./list-staff-summary.component.scss'],
  animations: [routerTransition()]
})
export class ListStaffSummaryComponent implements OnInit {
  breadcrumbs: MenuItem[];

  users: IUser[];

  //workloadSummaries: WorkloadSummary[];

  private unsubscribe = new Subject();
  constructor(
    private alertService: AlertService,
    private router: Router,
    private workloadService: WorkloadService
  ) {}

  ngOnInit() {
    // this.breadcrumbs = [
    //   { label: 'hod' },
    //   { label: 'staff-summary', url: 'hod/staff-summary' }
    // ];
    // this.getWorkloadSummaries();
  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }

  // getWorkloadSummaries() {
  //   this.workloadService
  //     .workloadSummaries()
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       (result) => {
  //         this.workloadSummaries = result.data.workloadSummaries;
  //         console.log(this.workloadSummaries);
  //       },
  //       (err) => {
  //         this.alertService.errorToast(err);
  //         console.warn(err);
  //       }
  //     );
  // }
  // onBack(event) {}
}
