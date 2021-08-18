import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Component, OnInit, ViewChild } from '@angular/core';

import { IDiscipline } from './discipline.interface';
import { DisciplineService } from './discipline.service';
import { routerTransition } from 'src/app/router.animations';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipline.component.html',
  styleUrls: ['./discipline.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  disciplineDialog: boolean;
  disciplines: IDiscipline[];
  discipline: IDiscipline;
  selectedDisciplines: IDiscipline[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private disciplineService: DisciplineService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'discipline',
        url: 'admin/discipline'
      }
    ];
    this.getDisciplines();
    this.timer = setInterval(() => {
      this.getDisciplines();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Discipline destroyed');
  }

  getDisciplines() {
    this.disciplineService.all().subscribe((data) => {
      this.disciplines = data;
      console.log(JSON.stringify(this.disciplines));
    });
  }

  openNew() {
    this.discipline = {};
    this.submitted = false;
    this.disciplineDialog = true;
  }

  deleteSelectedDisciplines() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.disciplines = this.disciplines.filter(
          (val) => !this.selectedDisciplines.includes(val)
        );
        this.selectedDisciplines = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Disciplines deleted',
          life: 3000
        });
      }
    });
  }

  editDiscipline(discipline: IDiscipline) {
    this.discipline = { ...discipline };
    this.disciplineDialog = true;
  }

  deleteDiscipline(discipline: IDiscipline) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + discipline.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.disciplineService.delete(discipline._id).subscribe((data) => {
          this.disciplines = [...this.disciplines];
        });

        this.discipline = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Discipline Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.disciplineDialog = false;
    this.submitted = false;
  }

  saveDiscipline() {
    this.submitted = true;

    if (this.discipline.name.trim()) {
      if (this.discipline._id) {
        this.disciplineService
          .update(this.discipline)
          .subscribe((data) => (this.discipline = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'discipline Updated',
          life: 3000
        });
      } else {
        this.disciplineService.create(this.discipline).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'discipline Created',
          life: 3000
        });
      }

      //this.disciplines = [...this.disciplines];
      this.disciplineDialog = false;
      this.discipline = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.disciplines.length; i++) {
      if (this.disciplines[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(
      ($event.target as HTMLInputElement).value,
      'contains'
    );
  }
}
