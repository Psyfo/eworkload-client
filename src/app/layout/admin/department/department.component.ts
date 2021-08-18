import { FacultyService } from './../faculty/faculty.service';
import { IFaculty } from './../faculty/faculty.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { IDepartment } from './department.interface';
import { DepartmentService } from './department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: [routerTransition()]
})
export class DepartmentComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;

  breadcrumbs: MenuItem[];

  departmentDialog: boolean;
  departments: IDepartment[];
  department: IDepartment;
  selectedDepartments: IDepartment[];
  faculties: IFaculty[];
  faculty: IFaculty;
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private departmentService: DepartmentService,
    private facultyService: FacultyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'department',
        url: 'admin/department'
      }
    ];
    this.getDepartments();
    this.getFaculties();
    this.timer = setInterval(() => {
      this.getDepartments();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Department destroyed');
  }

  getDepartments() {
    this.departmentService.all().subscribe((data) => (this.departments = data));
  }

  getFaculties() {
    this.facultyService.all().subscribe((data) => (this.faculties = data));
  }

  openNew() {
    this.department = {};
    this.submitted = false;
    this.departmentDialog = true;
  }

  deleteSelectedDepartments() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departments = this.departments.filter(
          (val) => !this.selectedDepartments.includes(val)
        );
        this.selectedDepartments = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Departments deleted',
          life: 3000
        });
      }
    });
  }

  editDepartment(department: IDepartment) {
    this.department = { ...department };
    this.departmentDialog = true;
  }

  deleteDepartment(department: IDepartment) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + department.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.departmentService.delete(department._id).subscribe((data) => {
          this.departments = [...this.departments];
        });

        this.department = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Department Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.departmentDialog = false;
    this.submitted = false;
  }

  saveDepartment() {
    this.submitted = true;

    if (this.department.name.trim()) {
      if (this.department._id) {
        this.departmentService
          .update(this.department)
          .subscribe((data) => (this.department = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'department Updated',
          life: 3000
        });
      } else {
        this.departmentService.create(this.department).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'department Created',
          life: 3000
        });
      }

      //this.departments = [...this.departments];
      this.departmentDialog = false;
      this.department = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i]._id === _id) {
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
