import { AlertService } from 'src/app/shared/modules';
import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { QualificationService } from 'src/app/layout/admin/qualification/qualification.service';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-enrollment',
  templateUrl: './edit-enrollment.component.html',
  styleUrls: ['./edit-enrollment.component.scss'],
  animations: [routerTransition()]
})
export class EditEnrollmentComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f') form: any;

  // enrollment: Enrollment;
  // enrollmentInput: EnrollmentInput = {};
  // qualifications: Qualification[];
  // selectedQualification: Qualification;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private enrollmentService: EnrollmentService,
    private qualificationService: QualificationService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          const qualificationId = result.get('qualificationId');
          const enrollmentYear = result.get('enrollmentYear');
          const id = result.get('id');
          this.alertService.successToast(
            `${qualificationId}(${enrollmentYear})`
          );
          //this.getEnrollment(id);
          this.breadcrumbs = [
            { label: 'hod' },
            { label: 'enrollment' },
            { label: 'edit' },
            { label: qualificationId }
          ];
        },
        (err) => {
          this.alertService.errorToast(err);
        }
      );
    //this.getQualifications();
  }
  // ngOnDestroy(): void {
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }

  // getEnrollment(id: string) {
  //   this.enrollmentService
  //     .enrollment(id)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       (result) => {
  //         this.enrollment = result.data.enrollment;
  //         this.enrollmentInput = {};
  //         this.enrollmentInput = {
  //           id: this.enrollment.id,
  //           enrollmentYear: this.enrollment.enrollmentYear,
  //           qualificationId: this.enrollment.qualificationId,
  //           firstYearEstimated: this.enrollment.firstYearEstimated,
  //           secondYearEstimated: this.enrollment.secondYearEstimated,
  //           thirdYearEstimated: this.enrollment.thirdYearEstimated
  //         };
  //       },
  //       (err) => {
  //         this.alertService.errorToast(err);
  //         console.warn(err);
  //       }
  //     );
  // }

  // getQualifications() {
  //   this.qualificationService
  //     .qualificationsUnenrolled()
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe((result) => {
  //       this.qualifications = result.data.qualificationsUnenrolled;
  //     });
  // }

  // onSubmit() {
  //   this.enrollmentService
  //     .editEnrollment(this.enrollmentInput)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       (result) => {},
  //       (err) => {
  //         this.alertService.errorToast(err);
  //         console.warn(err);
  //       }
  //     );
  //   this.router.navigate(
  //     ['hod/enrollment/view', this.enrollment.qualificationId],
  //     {
  //       queryParams: {
  //         id: this.enrollment.id
  //       }
  //     }
  //   );
  // }
  // onBack(event) {
  //   this.router.navigate(['hod/enrollment']);
  // }
  // onReset(event) {
  //   this.ngOnInit();
  // }
}
