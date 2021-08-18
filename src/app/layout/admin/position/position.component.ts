import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { IPosition } from './position.interface';
import { PositionService } from './position.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
  animations: [routerTransition()]
})
export class PositionComponent implements OnInit {
    @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  positionDialog: boolean;
  positions: IPosition[];
  position: IPosition;
  selectedPositions: IPosition[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private positionService: PositionService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'position',
        url: 'admin/position'
      }
    ];
    this.getPositions();
    this.timer = setInterval(() => {
      this.getPositions();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Position destroyed');
  }

  getPositions() {
    this.positionService.all().subscribe((data) => {
      this.positions = data;
      console.log(JSON.stringify(this.positions));
    });
  }

  openNew() {
    this.position = {};
    this.submitted = false;
    this.positionDialog = true;
  }

  deleteSelectedPositions() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.positions = this.positions.filter(
          (val) => !this.selectedPositions.includes(val)
        );
        this.selectedPositions = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Positions deleted',
          life: 3000
        });
      }
    });
  }

  editPosition(position: IPosition) {
    this.position = { ...position };
    this.positionDialog = true;
  }

  deletePosition(position: IPosition) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + position.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.positionService.delete(position._id).subscribe((data) => {
          this.positions = [...this.positions];
        });

        this.position = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Position Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.positionDialog = false;
    this.submitted = false;
  }

  savePosition() {
    this.submitted = true;

    if (this.position.name.trim()) {
      if (this.position._id) {
        this.positionService
          .update(this.position)
          .subscribe((data) => (this.position = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'position Updated',
          life: 3000
        });
      } else {
        this.positionService.create(this.position).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'position Created',
          life: 3000
        });
      }

      //this.positions = [...this.positions];
      this.positionDialog = false;
      this.position = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.positions.length; i++) {
      if (this.positions[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }

  applyFilterGlobal($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }
}
