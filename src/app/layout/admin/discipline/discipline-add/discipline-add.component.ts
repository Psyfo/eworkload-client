import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline, DisciplineInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-discipline-add',
  templateUrl: './discipline-add.component.html',
  styleUrls: ['./discipline-add.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineAddComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { read: NgForm }) form: NgForm;

  disciplineInput: DisciplineInput = {};
  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'discipline' },
      { label: 'add' }
    ];
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  onSubmit() {
    this.isSubmitting = true;
    this.disciplineService
      .addDiscipline(this.disciplineInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.isSubmitting = false;
          this.alertService.successToast(
            `Discipline ${result.data.addDiscipline.disciplineId} added`
          );
          this.router.navigate(['admin/discipline']);
        },
        err => {
          console.error(err);
        }
      );
  }
  onBack(event) {
    this.router.navigate(['admin/discipline']);
  }
  onReset(event) {
    this.form.reset();
  }
}
