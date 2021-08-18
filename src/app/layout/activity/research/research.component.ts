import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ResearchService } from './research.service';
import { UserService } from '../../admin/user/user.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { IResearchActivity } from './research.interface';
import { IUser } from '../../admin/user/user.interface';
import { Subject } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  animations: [routerTransition()]
})
export class ResearchComponent implements OnInit {

    @ViewChild('dt') dt: Table | undefined;

    breadcrumbs: MenuItem[];

    researchDialog: boolean;
    researchActivities: IResearchActivity[];
    researchActivity: IResearchActivity;
    selectedResearchActivities: IResearchActivity[];

    users: IUser[];
    selectedUser: IUser;
    submitted: boolean;
    statuses: any;
    types: string[];

    unsubscribe = new Subject();
    timer;

    constructor(
      private researchService: ResearchService,
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
      this.getResearchActivities();
      this.getUsers();
      this.timer = setInterval(() => {
        this.getResearchActivities();
      }, 2000);
    }
    ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
      if (this.timer) {
        clearInterval(this.timer);
      }
      console.log('Research destroyed');
    }

    getResearchActivities() {
      this.researchService.all().subscribe((data) => {
        this.researchActivities = data;
      });
    }

    getUsers() {
      this.userService.all().subscribe((data) => (this.users = data));
    }

    openNew() {
      this.researchActivity = {};
      this.submitted = false;
      this.researchDialog = true;
    }

    deleteSelectedResearchs() {
      this.confirmationService.confirm({
        message: 'Are your sure you want to delete the selected items?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.researchActivities = this.researchActivities.filter(
            (val) => !this.selectedResearchActivities.includes(val)
          );
          this.selectedResearchActivities = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Researchs deleted',
            life: 3000
          });
        }
      });
    }

    editResearch(researchActivity: IResearchActivity) {
      this.researchActivity = { ...researchActivity };
      this.researchDialog = true;
    }

    deleteResearch(researchActivity: IResearchActivity) {
      this.confirmationService.confirm({
        message:
          'Are you sure you want to delete ' + researchActivity._id + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.researchService
            .delete(researchActivity._id)
            .subscribe((data) => {
              this.researchActivities = [...this.researchActivities];
            });

          this.researchActivity = {};
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
      this.researchDialog = false;
      this.submitted = false;
    }

    saveResearch() {
      this.submitted = true;

      if (this.researchActivity.userId) {
        console.log('Save hit');

        if (this.researchActivity._id) {
          this.researchService
            .update(this.researchActivity)
            .subscribe((data) => (this.researchActivity = data));
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Research Activity Updated',
            life: 3000
          });
        } else {
          this.researchActivity.dutyId = '11';

          this.researchService.create(this.researchActivity).subscribe();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Research Activity Created',
            life: 3000
          });
        }

        //this.researchActivities = [...this.researchActivities];
        this.researchDialog = false;
        this.researchActivity = {};
      }
    }

    findIndexById(_id: string): number {
      let index = -1;
      for (let i = 0; i < this.researchActivities.length; i++) {
        if (this.researchActivities[i]._id === _id) {
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
