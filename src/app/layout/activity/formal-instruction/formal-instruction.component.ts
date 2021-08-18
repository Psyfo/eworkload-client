import { UserService } from 'src/app/layout/admin/user/user.service';
import { GroupService } from 'src/app/layout/admin/group/group.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';
import { IGroup } from '../../admin/group/group.interface';
import { IUser } from '../../admin/user/user.interface';

import { IFormalInstructionActivity } from './formal-instruction.interface';
import { FormalInstructionService } from './formal-instruction.service';

@Component({
  selector: 'app-formalInstructionActivity',
  templateUrl: './formal-instruction.component.html',
  styleUrls: ['./formal-instruction.component.scss'],
  animations: [routerTransition()]
})
export class FormalInstructionComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  formalInstructionDialog: boolean;
  formalInstructionActivities: IFormalInstructionActivity[];
  formalInstructionActivity: IFormalInstructionActivity;
  selectedFormalInstructionActivities: IFormalInstructionActivity[];
  groups: IGroup[];
  selectedGroup: IGroup;
  users: IUser[];
  selectedUser: IUser;
  submitted: boolean;
  statuses: any;
  types: string[];

  unsubscribe = new Subject();
  timer;

  constructor(
    private formalInstructionService: FormalInstructionService,
    private groupService: GroupService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'formal-instruction',
        url: 'admin/formal-instruction'
      }
    ];
    this.types = ['Diploma', 'Bachelor', 'Masters', 'Doctorate'];
    this.getFormalInstructions();
    this.getGroups();
    this.getUsers();
    this.timer = setInterval(() => {
      this.getFormalInstructions();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('FormalInstruction destroyed');
  }

  getFormalInstructions() {
    this.formalInstructionService.all().subscribe((data) => {
      this.formalInstructionActivities = data;
    });
  }

  getGroups() {
    this.groupService.all().subscribe((data) => (this.groups = data));
  }

  getUsers() {
    this.userService.all().subscribe((data) => (this.users = data));
  }

  openNew() {
    this.formalInstructionActivity = {};
    this.submitted = false;
    this.formalInstructionDialog = true;
  }

  deleteSelectedFormalInstructions() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.formalInstructionActivities =
          this.formalInstructionActivities.filter(
            (val) => !this.selectedFormalInstructionActivities.includes(val)
          );
        this.selectedFormalInstructionActivities = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'FormalInstructions deleted',
          life: 3000
        });
      }
    });
  }

  editFormalInstruction(formalInstructionActivity: IFormalInstructionActivity) {
    this.formalInstructionActivity = { ...formalInstructionActivity };
    this.formalInstructionDialog = true;
  }

  deleteFormalInstruction(
    formalInstructionActivity: IFormalInstructionActivity
  ) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' +
        formalInstructionActivity._id +
        '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.formalInstructionService
          .delete(formalInstructionActivity._id)
          .subscribe((data) => {
            this.formalInstructionActivities = [
              ...this.formalInstructionActivities
            ];
          });

        this.formalInstructionActivity = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Activity Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.formalInstructionDialog = false;
    this.submitted = false;
  }

  saveFormalInstruction() {
    this.submitted = true;

    if (this.formalInstructionActivity.userId) {
      console.log('Save hit');

      if (this.formalInstructionActivity._id) {
        this.formalInstructionService
          .update(this.formalInstructionActivity)
          .subscribe((data) => (this.formalInstructionActivity = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Formal InstructionActivity Updated',
          life: 3000
        });
      } else {
        this.formalInstructionActivity.dutyId = '11';

        this.formalInstructionService
          .create(this.formalInstructionActivity)
          .subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Formal InstructionActivity Created',
          life: 3000
        });
      }

      //this.formalInstructionActivities = [...this.formalInstructionActivities];
      this.formalInstructionDialog = false;
      this.formalInstructionActivity = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.formalInstructionActivities.length; i++) {
      if (this.formalInstructionActivities[i]._id === _id) {
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
