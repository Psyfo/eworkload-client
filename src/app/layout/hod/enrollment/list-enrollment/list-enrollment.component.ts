import { AlertService } from './../../../../shared/modules/alert/alert.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { routerTransition } from 'src/app/router.animations';
import { Enrollment } from 'src/app/shared/generated';

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-enrollment',
  templateUrl: './list-enrollment.component.html',
  styleUrls: ['./list-enrollment.component.scss'],
  animations: [routerTransition()]
})
export class ListEnrollmentComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean;

  enrollments: Enrollment[];
  selectedEnrollment: Enrollment;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'enrollment',
        url: 'hod/enrollment'
      }
    ];
    this.menuItems = [
      {
        label: 'View',
        icon: 'pi pi-search',
        command: event => this.onContextView(event)
      },
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: event => this.onContextEdit(event)
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: event => this.onContextDelete(event)
      }
    ];
    this.cols = [
      { field: 'enrollmentYear', header: 'Enrollment Year' },
      {
        field: 'qualification.qualificationId ',
        header: 'Qualification ID'
      },
      {
        field: 'qualification.name',
        header: 'Qualification'
      },
      { field: 'firstYearEstimated', header: 'First Year' },
      { field: 'secondYearEstimated', header: 'Second Year' },
      { field: 'thirdYearEstimated', header: 'Third Year' }
    ];
    this.getEnrollments();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getEnrollments() {
    this.enrollmentService
      .enrollments()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.loading = result.loading;
          this.enrollments = result.data.enrollments;
        },
        err => {
          this.alertService.errorToast(err);
        }
      );
  }

  onAdd() {
    this.router.navigate(['hod/enrollment/add']);
  }

  onRowSelect(event) {
    this.alertService.infoToast(
      `Enrollment for: ${this.selectedEnrollment.qualificationId}(${this.selectedEnrollment.enrollmentYear}) selected`
    );
    this.router.navigate(['hod/enrollment/view', this.selectedEnrollment.qualificationId], {
      queryParams: {
        id: this.selectedEnrollment.id
      }
    });
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Enrollment for: ${this.selectedEnrollment.qualificationId}(${this.selectedEnrollment.enrollmentYear}) selected`
    );
    this.router.navigate(['hod/enrollment/view', this.selectedEnrollment.qualificationId], {
      queryParams: {
        id: this.selectedEnrollment.id
      }
    });
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Enrollment for: ${this.selectedEnrollment.qualificationId}(${this.selectedEnrollment.enrollmentYear}) selected`
    );
    this.router.navigate(['hod/enrollment/edit', this.selectedEnrollment.qualificationId], {
      queryParams: {
        id: this.selectedEnrollment.id
      }
    });
  }
  onContextDelete(event) {}
  onConfirm(event) {}
  onReject(event) {}
}
