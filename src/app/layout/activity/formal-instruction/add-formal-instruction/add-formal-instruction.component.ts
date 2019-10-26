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
import { Router } from '@angular/router';

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
    isCoordinator: boolean;
    isSubmitting: boolean;

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
        this.getModulesByDiscipline();
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
        this.activityInput = {
            userId: this.userId,
            dutyId: this.dutyId,
            moduleId: this.selectedModule.moduleId,
            blockId: this.selectedModule.blockId,
            offeringTypeId: this.selectedModule.offeringTypeId,
            qualificationId: this.selectedModule.qualificationId,
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
        this.form.reset();
        this.ngOnInit();
    }
}
