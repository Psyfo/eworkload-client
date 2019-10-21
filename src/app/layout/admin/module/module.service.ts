import { ModulesByUnassignedAndDisciplineGQL } from './../../../shared/generated/output';
import { map } from 'rxjs/operators';
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
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ModuleService {
    loading: boolean;
    errors: any;
    networkStatus;

    public types = [
        { label: 'Core', value: 'Core' },
        { label: 'Fundamental', value: 'Fundamental' },
        { label: '(GE) Institutional', value: '(GE) Institutional' }
    ];
    public assessmentMethods = [
        { label: 'Exam', value: 'Exam' },
        { label: 'Continuous Assessment', value: 'Continuous Assessment' }
    ];

    constructor(
        private moduleGql: ModuleGQL,
        private modulesGql: ModulesGQL,
        private modulesByDisciplineGql: ModulesByDisciplineGQL,
        private addModuleGql: AddModuleGQL,
        private addModulesGql: AddModulesGQL,
        private editModuleGql: EditModuleGQL,
        private deleteModuleGql: DeleteModuleGQL,
        private modulesByStackGql: ModulesByStackGQL,
        private modulesByUnassignedGql: ModulesByUnassignedGQL,
        private modulesByUnassignedAndDisciplineGql: ModulesByUnassignedAndDisciplineGQL
    ) {}

    modules() {
        return this.modulesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    modulesByDiscipline(disciplineIds: string[]) {
        return this.modulesByDisciplineGql
            .watch(
                { disciplineIds: disciplineIds },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
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
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    module(
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
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
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
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }
    modulesByUnassignedAndDiscipline(disciplineIds: string[]) {
        return this.modulesByUnassignedAndDisciplineGql
            .watch(
                { disciplineIds: disciplineIds },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        return err;
                    }
                )
            );
    }

    addModule(module: ModuleInput) {
        return this.addModuleGql.mutate({ module: module }).pipe(
            map(
                result => {
                    return result;
                },
                err => {
                    return err;
                }
            )
        );
    }

    addModules(modules: ModuleInput[]) {
        return this.addModulesGql.mutate({ modules: modules }).pipe(
            map(
                result => {
                    return result;
                },
                err => {
                    return err;
                }
            )
        );
    }

    editModule(module: ModuleInput) {
        return this.editModuleGql.mutate({ module: module }).pipe(
            map(
                result => {
                    return result;
                },
                err => {
                    return err;
                }
            )
        );
    }

    deleteModule(module: ModuleInput) {
        return this.deleteModuleGql.mutate({ module: module }).pipe(
            map(
                result => {
                    return result;
                },
                err => {
                    return err;
                }
            )
        );
    }
}
