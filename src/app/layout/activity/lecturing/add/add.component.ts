import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
    AlertService,
    UserService,
    ModuleService,
    ActivityService,
    WorkloadService
} from '../../../../shared/services';
import { routerTransition } from '../../../../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
    User,
    Module,
    FormalInstructionActivity
} from '../../../../shared/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { resultKeyNameFromField } from 'apollo-utilities';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    user: User;
    users: User[];
    module: Module = new Module();
    modules: Module[];

    baseContact: number;
    coordinationWorkload: number;

    formalInstructionActivity: FormalInstructionActivity = new FormalInstructionActivity();

    private unsubscribe = new Subject();

    formalInstructionAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private moduleService: ModuleService,
        private activityService: ActivityService,
        private workloadService: WorkloadService
    ) {}

    ngOnInit() {
        this.buildForm();
        this.valueChanges();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
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
                this.modules = result.data.modulesByDiscipline.map(
                    module => <Module>(<unknown>module)
                );
            });
    }
    getModule(moduleId) {
        this.moduleService
            .getModule(moduleId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.module = <Module>(<unknown>result.data.module);
                this.baseContact = this.workloadService.calcBaseContact(
                    this.module
                );
                if (this.isCoordinator.value === true) {
                    this.coordinationWorkload = this.workloadService.calcCoordinationWorkload(
                        this.module
                    );
                } else if (this.isCoordinator.value === false) {
                    this.coordinationWorkload = null;
                }
                console.log(this.baseContact);
                console.log(this.coordinationWorkload);
            });
    }

    valueChanges() {
        this.moduleId.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                if (result !== null) {
                    this.getModule(this.moduleId.value);
                }
            });

        this.isCoordinator.valueChanges
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
    }
    onAdd() {
        this.formalInstructionActivity.dutyId = '11';
        this.formalInstructionActivity.moduleId = this.moduleId.value;
        if (this.isCoordinator.value === true) {
            this.formalInstructionActivity.coordinatorId = this.userService.currentUserIdStatic();
        }

        this.activityService
            .addFormalInstructionActivity(this.formalInstructionActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Activity added', 'success');

                this.router.navigate(['../admin/lecturing']);
            });
    }
    onBack() {
        this.router.navigate(['activity/lecturing']);
    }
    onReset() {
        this.formalInstructionAddForm.reset();
        this.ngOnInit();
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
