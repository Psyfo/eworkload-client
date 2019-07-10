import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import {
    ModulesGQL,
    ModuleGQL,
    ModulesByDisciplineGQL,
    AddModuleGQL,
    EditModuleGQL,
    DeleteModuleGQL,
    ModulesByStackGQL,
    ModulesByUnassignedGQL,
    AddModulesGQL
} from '../generated/output';
import { Module, ModuleInput } from '../models';
import { map, takeUntil } from 'rxjs/operators';
import { Observable } from 'apollo-link';
import { AlertService } from './alert.service';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {
    module: Module;
    modules: Module[];

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
        private errorService: ErrorService,
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
        return this.modulesGql.watch().valueChanges.pipe(
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
            .watch({ disciplineId: disciplineId })
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
            .watch({ stackId: stackId })
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
            .watch({
                moduleId: moduleId,
                blockId: blockId,
                offeringTypeId: offeringTypeId,
                qualificationId: qualificationId
            })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    unassignedModule() {
        return this.modulesByUnassignedGql.watch({}).valueChanges.pipe(
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
