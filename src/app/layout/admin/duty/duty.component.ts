import { routerTransition } from 'src/app/router.animations';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { IDuty } from './duty.interface';
import { DutyService } from './duty.service';

@Component({
  selector: 'app-duty',
  templateUrl: './duty.component.html',
  styleUrls: ['./duty.component.scss'],
  animations: [routerTransition()]
})
export class DutyComponent implements OnInit {
  breadcrumbs: MenuItem[];

  dutyDialog: boolean;
  duties: IDuty[];
  duty: IDuty;
  selectedDuties: IDuty[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private dutyService: DutyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'duty',
        url: 'admin/duty'
      }
    ];
    this.getDuties();
    this.timer = setInterval(() => {
      this.getDuties();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Duty destroyed');
  }

  getDuties() {
    this.dutyService.all().subscribe((data) => {
      this.duties = data;
      console.log(JSON.stringify(this.duties));
    });
  }

  openNew() {
    this.duty = {};
    this.submitted = false;
    this.dutyDialog = true;
  }

  deleteSelectedDuties() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.duties = this.duties.filter(
          (val) => !this.selectedDuties.includes(val)
        );
        this.selectedDuties = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Duties deleted',
          life: 3000
        });
      }
    });
  }

  editDuty(duty: IDuty) {
    this.duty = { ...duty };
    this.dutyDialog = true;
  }

  deleteDuty(duty: IDuty) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + duty.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.dutyService.delete(duty._id).subscribe((data) => {
          this.duties = [...this.duties];
        });

        this.duty = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Duty Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.dutyDialog = false;
    this.submitted = false;
  }

  saveDuty() {
    this.submitted = true;

    if (this.duty.name.trim()) {
      if (this.duty._id) {
        this.dutyService
          .update(this.duty)
          .subscribe((data) => (this.duty = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'duty Updated',
          life: 3000
        });
      } else {
        this.dutyService.create(this.duty).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'duty Created',
          life: 3000
        });
      }

      //this.duties = [...this.duties];
      this.dutyDialog = false;
      this.duty = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.duties.length; i++) {
      if (this.duties[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
