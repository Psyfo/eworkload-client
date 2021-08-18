import { IDepartment } from './../department/department.interface';
import { DepartmentService } from './../department/department.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit, ViewChild } from '@angular/core';

import { IQualification } from './qualification.interface';
import { QualificationService } from './qualification.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [routerTransition()]
})
export class QualificationComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  qualificationDialog: boolean;
  qualifications: IQualification[];
  qualification: IQualification;
  selectedQualifications: IQualification[];
  departments: IDepartment[];
  department: IDepartment;
  submitted: boolean;
  statuses: any;
  types: string[];

  unsubscribe = new Subject();
  timer;

  constructor(
    private qualificationService: QualificationService,
    private departmentService: DepartmentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'qualification',
        url: 'admin/qualification'
      }
    ];
    this.types = [
      'Higher Certificate',
      'Diploma',
      'Advanced Diploma',
      'Bachelor',
      'Honors',
      'Masters',
      'Doctorate'
    ];
    this.getQualifications();
    this.getDepartments();
    this.timer = setInterval(() => {
      this.getQualifications();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Qualification destroyed');
  }

  getQualifications() {
    this.qualificationService.all().subscribe((data) => {
      this.qualifications = data;
      console.log(JSON.stringify(this.qualifications));
    });
  }

  getDepartments() {
    this.departmentService.all().subscribe((data) => (this.departments = data));
  }

  openNew() {
    this.qualification = {};
    this.submitted = false;
    this.qualificationDialog = true;
  }

  deleteSelectedQualifications() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.qualifications = this.qualifications.filter(
          (val) => !this.selectedQualifications.includes(val)
        );
        this.selectedQualifications = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Qualifications deleted',
          life: 3000
        });
      }
    });
  }

  editQualification(qualification: IQualification) {
    this.qualification = { ...qualification };
    this.qualificationDialog = true;
  }

  deleteQualification(qualification: IQualification) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + qualification.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.qualificationService
          .delete(qualification._id)
          .subscribe((data) => {
            this.qualifications = [...this.qualifications];
          });

        this.qualification = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Qualification Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.qualificationDialog = false;
    this.submitted = false;
  }

  saveQualification() {
    this.submitted = true;

    if (this.qualification.name.trim()) {
      if (this.qualification._id) {
        this.qualificationService
          .update(this.qualification)
          .subscribe((data) => (this.qualification = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'qualification Updated',
          life: 3000
        });
      } else {
        this.qualificationService.create(this.qualification).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'qualification Created',
          life: 3000
        });
      }

      //this.qualifications = [...this.qualifications];
      this.qualificationDialog = false;
      this.qualification = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.qualifications.length; i++) {
      if (this.qualifications[i]._id === _id) {
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
