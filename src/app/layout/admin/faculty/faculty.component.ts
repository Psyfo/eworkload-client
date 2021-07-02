import { routerTransition } from 'src/app/router.animations';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';

import { Component, OnInit } from '@angular/core';

import { IFaculty } from './faculty.interface';
import { FacultyService } from './faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
  animations: [routerTransition()]
})
export class FacultyComponent implements OnInit {
  breadcrumbs: MenuItem[];

  facultyDialog: boolean;
  faculties: IFaculty[];
  faculty: IFaculty;
  selectedFaculties: IFaculty[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private facultyservice: FacultyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'faculty',
        url: 'admin/faculty'
      }
    ];
    this.getFaculties();
    this.timer = setInterval(() => {
      this.getFaculties();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Faculty destroyed');
  }

  getFaculties() {
    this.facultyservice.all().subscribe((data) => {
      this.faculties = data;
      console.log(JSON.stringify(this.faculties));
    });
  }

  openNew() {
    this.faculty = {};
    this.submitted = false;
    this.facultyDialog = true;
  }

  deleteSelectedFaculties() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.faculties = this.faculties.filter(
          (val) => !this.selectedFaculties.includes(val)
        );
        this.selectedFaculties = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Faculties deleted',
          life: 3000
        });
      }
    });
  }

  editFaculty(faculty: IFaculty) {
    this.faculty = { ...faculty };
    this.facultyDialog = true;
  }

  deleteFaculty(faculty: IFaculty) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + faculty.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.facultyservice.delete(faculty._id).subscribe((data) => {
          this.faculties = [...this.faculties];
        });

        this.faculty = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Faculty Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.facultyDialog = false;
    this.submitted = false;
  }

  saveFaculty() {
    this.submitted = true;

    if (this.faculty.name.trim()) {
      if (this.faculty._id) {
        this.facultyservice
          .update(this.faculty)
          .subscribe((data) => (this.faculty = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'faculty Updated',
          life: 3000
        });
      } else {
        this.facultyservice.create(this.faculty).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'faculty Created',
          life: 3000
        });
      }

      //this.faculties = [...this.faculties];
      this.facultyDialog = false;
      this.faculty = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.faculties.length; i++) {
      if (this.faculties[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
