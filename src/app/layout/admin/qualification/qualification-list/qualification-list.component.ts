import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Qualification } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.scss'],
  animations: [routerTransition()]
})
export class QualificationListComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];
  loading: boolean;

  selectedQualification: Qualification;
  qualifications: Qualification[];
  types = this.qualificationService.types;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private qualificationService: QualificationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'qualification', url: 'admin/qualification' }
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
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: (event) => this.onContextDelete(event)
      }
    ];
    this.cols = [
      { field: 'qualificationId', header: 'Qualification ID' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'department.name', header: 'Department' }
    ];
    this.getQualifications();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  getQualifications() {
    this.qualificationService
      .qualifications()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.qualifications = result.data.qualifications;
      });
  }
  onAdd() {
    this.router.navigate(['admin/qualification/add']);
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Qualification: ${this.selectedQualification.qualificationId} selected`
    );

    this.router.navigate(
      ['admin/qualification/edit', this.selectedQualification.qualificationId],
      {
        queryParams: {
          qualificationId: this.selectedQualification.qualificationId
        }
      }
    );
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Activity: ${this.selectedQualification.qualificationId} selected`
    );

    this.router.navigate(
      ['admin/qualification/edit', this.selectedQualification.qualificationId],
      {
        queryParams: {
          qualificationId: this.selectedQualification.qualificationId
        }
      }
    );
  }
  onContextDelete(event) {
    this.alertService.confirm('qualificationDelete');
  }
  onConfirm() {
    this.alertService.clear();
    const qualificationInput = {
      qualificationId: this.selectedQualification.qualificationId
    };
    this.qualificationService
      .deleteQualification(qualificationInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {},
        (err) => {
          this.alertService.errorToast(err, 'errorToast');
        }
      );
    this.alertService.successToast('Qualification Deleted');
  }
  onReject() {
    this.alertService.clear();
  }
  onRowSelect(event) {
    this.alertService.infoToast(
      `Qualification: ${this.selectedQualification.qualificationId} selected`
    );
    this.router.navigate(
      ['admin/qualification/view', this.selectedQualification.qualificationId],
      {
        queryParams: {
          qualificationId: this.selectedQualification.qualificationId
        }
      }
    );
  }
  onDelete() {}
}
