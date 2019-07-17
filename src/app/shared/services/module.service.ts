import { Observable } from 'apollo-link';
import { map, takeUntil } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddModuleGQL,
    AddModulesGQL,
    DeleteModuleGQL,
    EditModuleGQL,
    ModuleGQL,
    ModuleInput,
    ModulesByDisciplineGQL,
    ModulesByStackGQL,
    ModulesByUnassignedGQL,
    ModulesGQL
} from '../generated/output';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {
    loading: boolean;
    errors: any;
    networkStatus;

    public types: string[] = ['Core', 'Fundamental', '(GE) Institutional'];
    public assessmentMethods: string[] = ['Exam', 'Continuous Assessment'];
    public studyPeriods: string[] = [
        'First Enrollment',
        'Other (Second year)',
        'Other (Third year)'
    ];

    constructor(
        private alertService: AlertService,
        private moduleGql: ModuleGQL,
        private modulesGql: ModulesGQL,
        private modulesByDiscipline: ModulesByDisciplineGQL,
        private addModuleGql: AddModuleGQL,
        private addModulesGql: AddModulesGQL,
        private editModuleGql: EditModuleGQL,
        private deleteModuleGql: DeleteModuleGQL,
        private modulesByStackGql: ModulesByStackGQL,
        private modulesByUnassignedGql: ModulesByUnassignedGQL
    ) {}

    getModules() {
        return this.modulesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getModulesByDiscipline(disciplineId: string) {
        return this.modulesByDiscipline
            .watch(
                { disciplineId: disciplineId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    modulesByStack(stackId: string) {
        return this.modulesByStackGql
            .watch(
                { stackId: stackId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getModule(
        moduleId: string,
        blockId: string,
        offeringTypeId: string,
        qualificationId: string
    ) {
        return this.moduleGql
            .watch(
                {
                    moduleId: moduleId,
                    blockId: blockId,
                    offeringTypeId: offeringTypeId,
                    qualificationId: qualificationId
                },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    modulesByUnassigned() {
        return this.modulesByUnassignedGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    addModule(module: ModuleInput) {
        return this.addModuleGql.mutate({ module: module }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    addModules(modules: ModuleInput[]) {
        return this.addModulesGql.mutate({ modules: modules }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editModule(module: ModuleInput) {
        return this.editModuleGql.mutate({ module: module }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteModule(module: ModuleInput) {
        return this.deleteModuleGql.mutate({ module: module }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
