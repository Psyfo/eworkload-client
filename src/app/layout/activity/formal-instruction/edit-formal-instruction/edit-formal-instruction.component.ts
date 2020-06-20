import {
  ModuleInput,
  FormalInstructionActivity,
  Group
} from './../../../../shared/generated/output';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
  FormalInstructionActivityInput,
  Module,
  User
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';
import { GroupService } from 'src/app/layout/admin/group/group.service';
import { group } from '@angular/animations';

@Component({
  selector: 'app-edit-formal-instruction',
  templateUrl: './edit-formal-instruction.component.html',
  styleUrls: ['./edit-formal-instruction.component.scss'],
  animations: [routerTransition()]
})
export class EditFormalInstructionComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { read: NgForm }) form: NgForm;

  userId = this.userService.currentUserIdStatic();
  dutyId = '11';

  selectedModule: Module = {};
  groups: Group[];
  selectedGroup: Group;
  modules: Module[];
  isCoordinator: boolean;
  isSubmitting: boolean;

  activityModel: FormalInstructionActivity;
  activityInput: FormalInstructionActivityInput = {};

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private moduleService: ModuleService,
    private formalInstructionService: FormalInstructionService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'activity' },
      { label: 'formal-instruction' },
      { label: 'edit' }
    ];
    this.getActivity();
    this.getModulesByDiscipline();
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getModulesByDiscipline() {
    this.userService
      .currentUser()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        const user = result.data.user;
        this.moduleService
          .modulesByDiscipline(user.disciplineIds)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(result => {
            this.modules = result.data.modulesByDiscipline.map(
              (module: Module) => {
                let mod: any = module;
                if (mod) {
                  mod.label = `${module.moduleId} - ${module.name} (${module.block.name}) (${module.offeringType.description})`;
                }
                return mod;
              }
            );
          });
      });
  }
  getGroupsByModule(moduleId: string) {
    this.groupService
      .groupsByModule(moduleId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          this.groups = result.data.groupsByModule.map((group: Group) => {
            let mod: any = group;
            if (group.module) {
              mod.label = `${group.module.moduleId} - Group ${group.groupId} - (${group.studentsEnrolled} students)`;
            }
            return mod;
          });
        },
        err => {
          console.error(err);
        }
      );
  }
  getActivity() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          const activityId: string = result.get('activityId');
          this.formalInstructionService
            .formalInstructionActivity(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
              result => {
                this.activityModel = result.data.formalInstructionActivity;
                this.selectedModule = this.modules.find(
                  module => module.id === this.activityModel.group.module.id
                );
                this.selectedGroup = this.groups.find(
                  group => group.id === this.activityModel.groupId
                );
                this.isCoordinator = this.activityModel.isCoordinator;
              },
              err => {
                console.error(err);
              }
            );
        },
        err => {
          console.error(err);
        }
      );
  }
  onModuleChanged(event) {
    this.groups = [];
    this.getGroupsByModule(this.selectedModule.id);
  }
  onSubmit() {
    this.isSubmitting = true;

    // Standard activity data
    this.activityInput = {
      userId: this.userId,
      dutyId: this.dutyId,
      groupId: this.selectedGroup.id,
      isCoordinator: this.isCoordinator
    };

    this.formalInstructionService
      .addFormalInstructionActivity(this.activityInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        console.log('FI Activity added:', result);

        this.isSubmitting = false;
        this.alertService.successToast('Activity added');
        this.router.navigate(['activity/formal-instruction']);
      });
  }
  onBack(event) {
    this.router.navigate(['activity/formal-instruction']);
  }
  onReset(event) {
    this.getActivity();
  }
}
