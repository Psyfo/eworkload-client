import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

import { IStudent } from './student.interface';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  animations: [routerTransition()]
})
export class StudentComponent implements OnInit {
  breadcrumbs: MenuItem[];

  studentDialog: boolean;
  students: IStudent[];
  student: IStudent;
  selectedStudents: IStudent[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'student',
        url: 'admin/student'
      }
    ];
    this.getStudents();
    this.timer = setInterval(() => {
      this.getStudents();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Student destroyed');
  }

  getStudents() {
    this.studentService.all().subscribe((data) => {
      this.students = data;
      console.log(JSON.stringify(this.students));
    });
  }

  openNew() {
    this.student = {};
    this.submitted = false;
    this.studentDialog = true;
  }

  deleteSelectedStudents() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.students = this.students.filter(
          (val) => !this.selectedStudents.includes(val)
        );
        this.selectedStudents = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Students deleted',
          life: 3000
        });
      }
    });
  }

  editStudent(student: IStudent) {
    this.student = { ...student };
    this.studentDialog = true;
  }

  deleteStudent(student: IStudent) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + student.studentId + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.studentService.delete(student._id).subscribe((data) => {
          this.students = [...this.students];
        });

        this.student = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Student Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.studentDialog = false;
    this.submitted = false;
  }

  saveStudent() {
    this.submitted = true;

    if (this.student._id.trim()) {
      if (this.student._id) {
        this.studentService
          .update(this.student)
          .subscribe((data) => (this.student = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'student Updated',
          life: 3000
        });
      } else {
        this.studentService.create(this.student).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'student Created',
          life: 3000
        });
      }

      //this.students = [...this.students];
      this.studentDialog = false;
      this.student = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
