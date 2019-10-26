import {
    ModuleInput,
    FormalInstructionActivity
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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';

@Component({
    selector: 'app-edit-formal-instruction',
    templateUrl: './edit-formal-instruction.component.html',
    styleUrls: ['./edit-formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class EditFormalInstructionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    dutyId = '11';

    selectedModule: Module = {};
    modules: Module[];
    isCoordinator: boolean;

    activityModel: FormalInstructionActivity;
    activityInput: FormalInstructionActivityInput = {};
    isSubmitting: boolean = false;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private moduleService: ModuleService,
        private formalInstructionService: FormalInstructionService
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

    getActivity() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const activityId = result.get('activityId');
                    this.formalInstructionService
                        .formalInstructionActivity(activityId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.activityModel =
                                    result.data.formalInstructionActivity;
                                this.selectedModule =
                                    result.data.formalInstructionActivity.module;
                                this.isCoordinator =
                                    result.data.formalInstructionActivity.isCoordinator;
                            },
                            err => {
                                this.alertService.errorToast(err);
                                console.warn(err);
                            }
                        );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
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
                            module => {
                                const label = `${module.moduleId} - ${module.name} (${module.block.name}) (${module.offeringType.description})`;
                                let mod: any = module;
                                mod.label = label;
                                return mod;
                            }
                        );
                    });
            });
    }

    onSubmit() {
        this.isSubmitting = true;

        // Standard activity data
        this.activityInput.userId = this.activityModel.userId;
        this.activityInput.dutyId = this.activityModel.dutyId;
        this.activityInput.activityId = this.activityModel.activityId;

        // Add modules to input
        this.activityInput.moduleId = this.selectedModule.moduleId;
        this.activityInput.blockId = this.selectedModule.blockId;
        this.activityInput.offeringTypeId = this.selectedModule.offeringTypeId;
        this.activityInput.qualificationId = this.selectedModule.qualificationId;

        this.activityInput.isCoordinator = this.isCoordinator;

        this.formalInstructionService
            .editFormalInstructionActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.isSubmitting = false;
                this.alertService.successToast('Activity edited');
                this.router.navigate(['activity/formal-instruction']);
            });
    }
    onBack(event) {
        this.router.navigate(['activity/formal-instruction']);
    }
    onReset(event) {
        this.form.reset();
        this.ngOnInit();
    }
}
