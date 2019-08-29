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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';

@Component({
    selector: 'app-edit-formal-instruction',
    templateUrl: './edit-formal-instruction.component.html',
    styleUrls: ['./edit-formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class EditFormalInstructionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    user: User;
    users: User[];
    selectedModule: Module;
    modules: Module[];
    coordinator: boolean;

    blockId: string;
    oId;
    qId;

    baseContact: number;
    coordinationWorkload: number;

    formalInstructionActivity: FormalInstructionActivityInput = {};

    private unsubscribe = new Subject();

    formalInstructionEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
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
        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    getVals(event) {
        console.log(event);
    }
    buildForm() {
        this.formalInstructionEditForm = this.fb.group({
            userId: [{ value: '', disabled: true }, [Validators.required]],
            module: ['', [Validators.required]],
            isCoordinator: ['']
        });

        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = <User>(<unknown>result.data.user);

                this.getModulesByUnassignedAndDiscipline(
                    this.user.discipline.disciplineId.toString()
                );

                this.formalInstructionEditForm.patchValue({
                    userId: this.user.userId
                });
            });
    }
    getUsers() {
        this.userService
            .getUsers()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.users = result.data.users.map(
                    user => <User>(<unknown>user)
                );
            });
    }
    getModulesByUnassignedAndDiscipline(disciplineId: string) {
        this.moduleService
            .modulesByUnassignedAndDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.modules = result.data.modulesByUnassignedAndDiscipline;
            });
    }

    editModule(module: Module) {
        this.moduleService
            .editModule(module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(result.data.editModule);
            });
    }

    onEdit() {
        this.formalInstructionActivity.userId = this.userService.currentUserIdStatic();
        this.formalInstructionActivity.dutyId = '11';
        this.selectedModule = this.module.value;
        this.formalInstructionActivity.moduleId = this.selectedModule.moduleId;
        this.formalInstructionActivity.blockId = this.selectedModule.blockId;
        this.formalInstructionActivity.offeringTypeId = this.selectedModule.offeringTypeId;
        this.formalInstructionActivity.qualificationId = this.selectedModule.qualificationId;
        console.log(this.formalInstructionActivity);
        // if (this.isCoordinator.value === true) {
        //     this.editCoordinator(this.user.userId, this.selectedModule);
        // }

        this.formalInstructionService
            .editFormalInstructionActivity(this.formalInstructionActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {},
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );

        this.alertService.successToast('Activity edited');
        this.router.navigate(['activity/formal-instruction']);
    }
    onBack(event) {
        this.router.navigate(['activity/formal-instruction']);
    }
    onReset(event) {
        this.formalInstructionEditForm.reset();
        this.ngOnInit();
    }
    editCoordinator(coordinatorId: string, module: Module) {
        module.coordinatorId = coordinatorId;
        this.moduleService
            .editModule(module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.successToast('Coordinator edited');
            });
    }

    // Getters
    get userId() {
        return this.formalInstructionEditForm.get('userId');
    }
    get module() {
        return this.formalInstructionEditForm.get('module');
    }
    get isCoordinator() {
        return this.formalInstructionEditForm.get('isCoordinator');
    }
}
