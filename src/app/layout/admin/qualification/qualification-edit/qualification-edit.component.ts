import { SelectItem } from 'primeng/components/common/selectitem';
import { NgForm } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department, QualificationInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Qualification } from '../../../../shared/generated/output';
import { DepartmentService } from '../../department/department.service';
import { QualificationService } from '../qualification.service';

@Component({
  selector: 'app-qualification-edit',
  templateUrl: './qualification-edit.component.html',
  styleUrls: ['./qualification-edit.component.scss'],
  animations: [routerTransition()]
})
export class QualificationEditComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { read: NgForm }) form: NgForm;

  qualificationModel: Qualification;
  qualificationInput: QualificationInput = {};
  departments: Department[] = [];
  selectedDepartment: Department;
  types = this.qualificationService.types;
  selectedType: any;
  isSubmitting: boolean;

  private unsubscribe = new Subject();
  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private qualificationService: QualificationService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'qualification' },
      { label: 'edit' }
    ];
    this.getDepartments();
    this.getQualification();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getQualification() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        const qualificationId = result.get('qualificationId');
        this.qualificationService
          .qualification(qualificationId)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(
            result => {
              this.qualificationModel = result.data.qualification;
              this.selectedDepartment = this.departments.find(
                department =>
                  department.departmentId ===
                  this.qualificationModel.departmentId
              );
              this.selectedType = this.types.find(
                type => type.value === this.qualificationModel.type
              );
            },
            err => {
              console.warn(err);
            }
          );
      });
  }
  getDepartments() {
    this.departmentService
      .departments()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.departments = result.data.departments;
        },
        err => {
          console.error(err);
        }
      );
  }

  onSubmit() {
    this.isSubmitting = true;
    this.qualificationInput = {
      qualificationId: this.qualificationModel.qualificationId,
      name: this.qualificationModel.name,
      departmentId: this.selectedDepartment.departmentId,
      type: this.selectedType.label
    };
    this.qualificationService
      .editQualification(this.qualificationInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.isSubmitting = false;
          this.alertService.successToast(
            `Qualification ${this.qualificationInput.qualificationId} edited`
          );

          this.router.navigate(['admin/qualification']);
        },
        err => {
          console.error(err);
        }
      );
  }
  onBack(event) {
    this.router.navigate(['admin/qualification']);
  }
  onReset(event) {
    this.getQualification();
    this.form.form.markAsPristine();
  }
}
