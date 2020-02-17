import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Faculty, FacultyInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, Renderer } from '@angular/core';
import { Router } from '@angular/router';

import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss'],
  animations: [routerTransition()]
})
export class FacultyListComponent implements OnInit {
  breadcrumbs: MenuItem[];
  menuItems: MenuItem[];
  cols: any[];

  loading: boolean;
  faculties: Faculty[];
  selectedFaculty: Faculty;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private facultyService: FacultyService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      { label: 'faculty' }
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
      { field: 'facultyId', header: 'Faculty ID' },
      { field: 'name', header: 'Name' }
    ];

    this.getFaculties();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  getFaculties(): void {
    this.loading = true;
    this.facultyService
      .getFaculties()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.faculties = result.data.faculties;
          this.loading = false;
        },
        err => {
          console.warn(err);
        }
      );
  }
  onAdd(event) {
    this.router.navigate(['admin/faculty/add']);
  }

  onRowSelect(event) {
    this.alertService.infoToast(
      `Faculty: ${this.selectedFaculty.facultyId} selected`
    );
    this.router.navigate(
      ['admin/faculty/view', this.selectedFaculty.facultyId],
      {
        queryParams: {
          facultyId: this.selectedFaculty.facultyId
        }
      }
    );
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Faculty: ${this.selectedFaculty.facultyId} selected`
    );
    this.router.navigate(
      ['admin/faculty/view', this.selectedFaculty.facultyId],
      {
        queryParams: {
          facultyId: this.selectedFaculty.facultyId
        }
      }
    );
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Faculty: ${this.selectedFaculty.facultyId} selected`
    );
    this.router.navigate(
      ['admin/faculty/edit', this.selectedFaculty.facultyId],
      {
        queryParams: {
          facultyId: this.selectedFaculty.facultyId
        }
      }
    );
  }
  onContextDelete(event) {
    this.alertService.confirm('facultyDelete');
  }
  onReject() {
    this.alertService.clear();
  }
  onConfirm() {
    this.alertService.clear();
    const facultyInput: FacultyInput = {
      facultyId: this.selectedFaculty.facultyId,
      name: this.selectedFaculty.name
    };
    this.facultyService
      .deleteFaculty(facultyInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.alertService.successToast('Faculty Deleted');
        },
        err => {
          this.alertService.errorToast(err, 'errorToast');
        }
      );
  }
}
