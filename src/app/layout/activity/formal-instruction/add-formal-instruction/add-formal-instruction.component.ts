import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
    FormalInstructionActivityInput,
    Module
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../../shared/generated/output';
import { FormalInstructionService } from '../formal-instruction.service';

@Component({
    selector: 'app-add-formal-instruction',
    templateUrl: './add-formal-instruction.component.html',
    styleUrls: ['./add-formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class AddFormalInstructionComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    dutyId = '11';

    selectedModule: Module = {};
    modules: Module[];
    isCoordinator: boolean = false;

    activityInput: FormalInstructionActivityInput = {};

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private userService: UserService,
        private moduleService: ModuleService,
        private formalInstructionService: FormalInstructionService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'formal-instruction' },
            { label: 'add' }
        ];
        this.getModulesByUnassignedAndDiscipline();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getModulesByUnassignedAndDiscipline() {
        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                const user = result.data.user;
                this.moduleService
                    .modulesByUnassignedAndDiscipline(user.disciplineIds)
                    .pipe(takeUntil(this.unsubscribe))
                    .subscribe(result => {
                        this.modules = result.data.modulesByUnassignedAndDiscipline.map(
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
        // Standard activity data
        this.activityInput.userId = this.userId;
        this.activityInput.dutyId = this.dutyId;

        // Add modules to input
        this.activityInput.moduleId = this.selectedModule.moduleId;
        this.activityInput.blockId = this.selectedModule.blockId;
        this.activityInput.offeringTypeId = this.selectedModule.offeringTypeId;
        this.activityInput.qualificationId = this.selectedModule.qualificationId;

        this.formalInstructionService
            .addFormalInstructionActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log('FI Activity added:', result);

                this.alertService.successToast('Activity added');
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
