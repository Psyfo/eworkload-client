import { resultKeyNameFromField } from 'apollo-utilities';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
    FormalInstructionActivity,
    Module,
    User
} from 'src/app/shared/generated/output';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import {
    ActivityService,
    FormalInstructionService,
    ModuleService,
    UserService,
    WorkloadService
} from '../../../../shared/services';
import { AlertService } from 'src/app/shared/modules';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    user: User;
    users: User[];
    module: Module;
    modules: Module[];

    blockId: string;
    oId;
    qId;

    baseContact: number;
    coordinationWorkload: number;

    formalInstructionActivity: FormalInstructionActivity;

    private unsubscribe = new Subject();

    formalInstructionAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private moduleService: ModuleService,
        private formalInstructionService: FormalInstructionService
    ) {}

    ngOnInit() {
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
        this.formalInstructionAddForm = this.fb.group({
            userId: [{ value: '', disabled: true }, [Validators.required]],
            moduleId: ['', [Validators.required]],
            isCoordinator: ['', [Validators.required]]
        });

        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = <User>(<unknown>result.data.user);

                this.getModulesByDiscipline(
                    this.user.discipline.disciplineId.toString()
                );

                this.formalInstructionAddForm.patchValue({
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
    getModulesByDiscipline(disciplineId: string) {
        this.moduleService
            .getModulesByDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.modules = result.data.modulesByDiscipline;
            });
    }
    getModule(moduleId, blockId, offeringTypeId, qualificationId) {
        this.moduleService
            .getModule(moduleId, blockId, offeringTypeId, qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.module = result.data.module;
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

    onAdd() {
        this.formalInstructionActivity.userId = this.userService.currentUserIdStatic();
        this.formalInstructionActivity.dutyId = '11';
        this.formalInstructionActivity.moduleId = this.module.moduleId;
        this.formalInstructionActivity.blockId = this.module.blockId;
        this.formalInstructionActivity.offeringTypeId = this.module.offeringTypeId;
        this.formalInstructionActivity.qualificationId = this.module.qualificationId;
        console.log(this.formalInstructionActivity);

        if (this.isCoordinator.value === true) {
            this.addCoordinator(
                this.userService.currentUserIdStatic(),
                this.module
            );
        }

        this.formalInstructionService
            .addFormalInstructionActivity(this.formalInstructionActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Activity added');

                this.router.navigate(['activity/lecturing']);
            });
    }
    onBack() {
        this.router.navigate(['activity/lecturing']);
    }
    onReset() {
        this.formalInstructionAddForm.reset();
        this.ngOnInit();
    }
    addCoordinator(coordinatorId: string, module: Module) {
        module.coordinatorId = coordinatorId;
        this.moduleService
            .editModule(module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Coordinator added');
            });
    }

    // Getters
    get userId() {
        return this.formalInstructionAddForm.get('userId');
    }
    get moduleId() {
        return this.formalInstructionAddForm.get('moduleId');
    }
    get isCoordinator() {
        return this.formalInstructionAddForm.get('isCoordinator');
    }
}
