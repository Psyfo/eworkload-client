import { Qualification } from 'src/app/shared/generated';
import { MenuItem } from 'primeng/api/menuitem';
import { QualificationService } from './../qualification.service';
import { AlertService } from 'src/app/shared/modules';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-qualification-view',
  templateUrl: './qualification-view.component.html',
  styleUrls: ['./qualification-view.component.scss'],
  animations: [routerTransition()]
})
export class QualificationViewComponent implements OnInit {
  breadcrumbs: MenuItem[];

  qualification: Qualification;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private qualificationService: QualificationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'qualification', url: 'admin/qualification' },
      { label: 'view', url: 'admin/qualification/view' }
    ];
    this.getRouteParams();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  getRouteParams() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          const qualificationId = result.get('qualificationId');
          this.getQualification(qualificationId);
        },
        (err) => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }
  getQualification(qualificationId: string) {
    this.qualificationService
      .qualification(qualificationId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.qualification = result.data.qualification;
        },
        (err) => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }
  onEdit() {
    this.router.navigate(
      ['admin/qualification/edit', this.qualification.qualificationId],
      {
        queryParams: {
          qualificationId: this.qualification.qualificationId
        }
      }
    );
  }
  onBack(event) {
    this.router.navigate(['admin/qualification']);
  }
  onDelete(event) {
    this.alertService.infoToast('Delete service to be implemented');
  }
}
