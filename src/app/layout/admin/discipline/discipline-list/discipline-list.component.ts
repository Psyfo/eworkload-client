import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';

import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AlertService } from 'src/app/shared/modules';

@Component({
  selector: 'app-discipline-list',
  templateUrl: './discipline-list.component.html',
  styleUrls: ['./discipline-list.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineListComponent implements OnInit {
  breadcrumbs: MenuItem[];
  items: MenuItem[];
  columns: any[];

  selectedDiscipline: Discipline;
  disciplines: Discipline[];

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'admin' }, { label: 'discipline' }];
    this.columns = [
      { field: 'disciplineId', header: 'Discipline ID' },
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' }
    ];
    this.items = [
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

    this.getDisciplines();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  // Methods
  getDisciplines() {
    this.disciplineService
      .disciplines()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.disciplines = result.data.disciplines;
        },
        err => {
          console.error(err);
        }
      );
  }

  onAdd(event) {
    this.router.navigate(['admin/discipline/add']);
  }
  onRowSelect(event) {
    this.alertService.infoToast(
      `Discipline: ${this.selectedDiscipline.disciplineId} selected`
    );
    this.router.navigate(
      ['admin/discipline/view', this.selectedDiscipline.disciplineId],
      {
        queryParams: {
          disciplineId: this.selectedDiscipline.disciplineId
        }
      }
    );
  }
  onContextView(event) {
    this.alertService.infoToast(
      `Discipline: ${this.selectedDiscipline.disciplineId} selected`
    );
    this.router.navigate(
      ['admin/discipline/view', this.selectedDiscipline.disciplineId],
      {
        queryParams: {
          disciplineId: this.selectedDiscipline.disciplineId
        }
      }
    );
  }
  onContextEdit(event) {
    this.alertService.infoToast(
      `Discipline: ${this.selectedDiscipline.disciplineId} selected`
    );
    this.router.navigate(
      ['admin/discipline/edit', this.selectedDiscipline.disciplineId],
      {
        queryParams: {
          disciplineId: this.selectedDiscipline.disciplineId
        }
      }
    );
  }
  onContextDelete(event) {
    this.alertService.confirm('disciplineDelete');
  }
  onConfirm() {
    this.alertService.clear();

    this.disciplineService
      .deleteDiscipline(this.selectedDiscipline)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.alertService.successToast(
            `Discipline: ${result.data.deleteDiscipline.disciplineId} deleted`
          );
        },
        err => {
          console.error(err);
        }
      );
  }
  onReject() {
    this.alertService.clear();
  }
}
