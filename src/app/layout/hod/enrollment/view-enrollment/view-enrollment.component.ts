import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/layout/admin/enrollment/enrollment.service';
import { routerTransition } from 'src/app/router.animations';
import { Enrollment } from 'src/app/shared/generated';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-enrollment',
  templateUrl: './view-enrollment.component.html',
  styleUrls: ['./view-enrollment.component.scss'],
  animations: [routerTransition()]
})
export class ViewEnrollmentComponent implements OnInit {
  enrollmentYear: string = '';
  qualificationId: string = '';

  enrollment: Enrollment;

  private unsubscribe = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.unsubscribe)).subscribe(queryparams => {
      const id = queryparams.get('id');

      this.getEnrollment(id);
    });
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getEnrollment(id: string) {
    this.enrollmentService
      .enrollment(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        this.enrollment = result.data.enrollment;
      });
  }

  onEdit() {
    this.router.navigate(['hod/enrollment/edit', this.qualificationId], {
      queryParams: {
        id: this.enrollment.id
      }
    });
  }
  onCancel() {
    this.router.navigate(['hod/enrollment']);
  }
  onDelete() {}
}
