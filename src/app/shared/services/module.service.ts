import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import {
    ModulesGQL,
    ModuleGQL,
    ModulesByDisciplineGQL,
    AddModuleGQL,
    EditModuleGQL,
    DeleteModuleGQL,
    StackedWithGQL,
    UnassignedModulesGQL
} from '../generated/output';
import { Module } from '../models';
import { map } from 'rxjs/operators';
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
        private editModuleGql: EditModuleGQL,
        private deleteModuleGql: DeleteModuleGQL,
        private stackedWithGql: StackedWithGQL,
        private unassignedModulesGql: UnassignedModulesGQL
    ) {}

    getModules() {
        return this.modulesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
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
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    stackedWith(stackId: string) {
        return this.stackedWithGql
            .watch({ stackId: stackId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    getModule(moduleId: string) {
        return this.moduleGql.watch({ moduleId: moduleId }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    unassignedModule() {
        return this.unassignedModulesGql.watch({}).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    addModule(module: Module) {
        return this.addModuleGql.mutate(module).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Add successful!', 'success');
                return result;
            })
        );
    }

    editModule(module: Module) {
        return this.editModuleGql.mutate(module).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Edit successful!', 'success');
                console.log(result);
            })
        );
    }
}
