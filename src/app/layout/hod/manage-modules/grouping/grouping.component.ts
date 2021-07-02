import { Subject } from 'rxjs';
import { takeUntil, startWith } from 'rxjs/operators';
import { GroupService } from 'src/app/layout/admin/group/group.service';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements OnInit {
  @ViewChild('f', { read: NgForm }) form: NgForm;

  // modules: Module[];
  // modModules: any[];
  // selectedModule: Module;
  // groups: Group[] = [];
  // groupInput: GroupInput = {};
  // selectedGroup: Group;
  // groupTotal: number;
  // remainingStudents: number;
  // isModular: boolean;

  isSubmittingGroup: boolean;

  private unsubscribe = new Subject();
  constructor(
    private alertService: AlertService,
    private router: Router,
    private moduleService: ModuleService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
   // this.getModules();
  }
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.unsubscribe.next();
  //   this.unsubscribe.complete();
  // }

  // getModules() {
  //   this.moduleService
  //     .modules()
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.modModules = result.data.modules.map(module => {
  //           let mod: any = module;
  //           if (module) {
  //             mod.label = `${module.moduleId} - ${module.name} - (${module.block.name}) (${module.offeringType.description})`;
  //           }
  //           return mod;
  //         });
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
  // getGroupsByModule(moduleId: string) {
  //   this.groupService
  //     .groupsByModule(moduleId)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.groups = result.data.groupsByModule;
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
  // getGroupTotal(moduleId: string) {
  //   if (!moduleId) {
  //     this.groups = [];
  //     return;
  //   }
  //   this.groupService
  //     .groupTotal(moduleId)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.groupTotal = result.data.groupTotal;
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
  // getRemainingStudents(moduleId: string) {
  //   this.groupService
  //     .remainingStudents(moduleId)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.remainingStudents = result.data.remainingStudents;
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
  // onChanges(event) {
  //   if (this.groupInput.studentsEnrolled !== null) {
  //     if (this.groupInput.studentsEnrolled <= 0) {
  //       this.alertService.warnToast(`No more students can be selected for this module`);
  //     }
  //   }
  // }
  // onModuleSelected(event) {
  //   this.getRemainingStudents(this.selectedModule.id);
  //   this.getGroupsByModule(this.selectedModule.id);
  // }
  // onNumberOfStudentsChanged(event, studentsEnrolled) {
  //   this.form.form.controls['studentsEnrolled'].valueChanges.pipe(takeUntil(this.unsubscribe)).subscribe(value => {
  //     if (studentsEnrolled > this.remainingStudents) {
  //       this.alertService.clear();
  //       this.alertService.warnToast(
  //         `Cannot select number of students higher than remaining (${this.remainingStudents})`
  //       );
  //     }
  //   });
  // }
  // onGroupNameChanged(event) {
  //   console.log('Event target: ', event.target.value);

  //   this.form.form.controls['groupCode'].valueChanges
  //     .pipe(startWith(null), takeUntil(this.unsubscribe))
  //     .subscribe(value => {
  //       this.onGroupExists(value, this.selectedModule.id);
  //     });
  // }
  // onGroupExists(groupId: string, moduleId: string) {
  //   return this.groupService
  //     .groupExists(groupId, moduleId)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         console.log(result.data.groupExists);
  //         if (result.data.groupExists === true) {
  //           this.alertService.clear();
  //           this.alertService.warnToast('This group already exists');
  //           this.form.form.controls['groupCode'].setErrors({ invalid: true });
  //         }
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  // }
  // onAddGroup(event) {
  //   if (this.remainingStudents < 1) {
  //     this.alertService.warnToast('There are no more students to enroll');
  //     return;
  //   }
  //   if (this.isModular === false && this.groupInput.modularity < 2) {
  //     this.alertService.warnToast('Modularity cannot be less than 2');
  //     return;
  //   }
  //   this.isSubmittingGroup = true;
  //   this.groupInput.moduleId = this.selectedModule.id;

  //   this.groupService
  //     .createGroup(this.groupInput)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.isSubmittingGroup = false;
  //         this.form.form.markAsPristine();
  //         this.groupInput = {};
  //         this.alertService.successToast('Group added');
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
  // onReset(event) {
  //   this.form.reset();
  // }
  // onUpdateGroup(event, group: Group) {
  //   const input: GroupInput = {
  //     id: group.id,
  //     groupId: group.groupId,
  //     modularity: group.modularity,
  //     moduleId: group.moduleId,
  //     studentsEnrolled: group.studentsEnrolled
  //   };
  // }
  // onDeleteGroup(event, group: Group) {
  //   const groupInput: GroupInput = {
  //     id: group.id,
  //     groupId: group.groupId,
  //     moduleId: group.moduleId,
  //     studentsEnrolled: group.studentsEnrolled,
  //     modularity: group.modularity
  //   };
  //   console.log(groupInput);

  //   this.groupService
  //     .deleteGroup(groupInput)
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(
  //       result => {
  //         this.alertService.successToast('Group removed');
  //       },
  //       err => {
  //         console.error(err);
  //       }
  //     );
  // }
}
