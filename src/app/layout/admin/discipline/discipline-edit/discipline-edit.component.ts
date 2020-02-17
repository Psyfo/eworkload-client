import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline, DisciplineInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';

@Component({
  selector: 'app-discipline-edit',
  templateUrl: './discipline-edit.component.html',
  styleUrls: ['./discipline-edit.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineEditComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { static: false, read: NgForm }) form: NgForm;

  disciplineModel: Discipline;
  disciplineInput: DisciplineInput;
  isSubmitting: boolean;

  private unsubscribe = new Subject();
  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'admin' }, { label: 'discipline' }, { label: 'edit' }];
    this.getDiscipline();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getDiscipline() {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.unsubscribe)).subscribe(
      result => {
        const disciplineId = result.get('disciplineId');
        this.disciplineService
          .discipline(disciplineId)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(
            result => {
              this.disciplineModel = result.data.discipline;
            },
            err => {
              console.error(err);
            }
          );
      },
      err => {
        console.error(err);
      }
    );
  }
  onSubmit() {
    this.isSubmitting = true;
    this.disciplineInput = {
      disciplineId: this.disciplineModel.disciplineId,
      name: this.disciplineModel.name,
      description: this.disciplineModel.description
    };

    this.disciplineService
      .editDiscipline(this.disciplineInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        this.isSubmitting = false;
        this.alertService.successToast(`Discipline ${this.disciplineInput.disciplineId} edited`);
        this.router.navigate(['admin/discipline']);
      });
  }
  onBack(event) {
    this.router.navigate(['admin/discipline']);
  }
  onReset(event) {
    this.getDiscipline();
    this.form.form.markAsPristine();
  }
}
