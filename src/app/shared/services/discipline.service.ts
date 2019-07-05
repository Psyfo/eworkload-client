import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
    DisciplineGQL,
    DisciplinesGQL,
    AddDisciplineGQL,
    EditDisciplineGQL,
    DeleteDisciplineGQL
} from '../generated/output';
import { Discipline, DisciplineInput } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class DisciplineService {
    discipline: Discipline;
    disciplines: Discipline[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private errorService: ErrorService,
        private alertService: AlertService,
        private disciplineGql: DisciplineGQL,
        private disciplinesGql: DisciplinesGQL,
        private addDisciplineGql: AddDisciplineGQL,
        private editDisciplineGql: EditDisciplineGQL,
        private deleteDisciplineGql: DeleteDisciplineGQL
    ) {}

    getDisciplines() {
        return this.disciplinesGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    getDiscipline(disciplineId: string) {
        return this.disciplineGql
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

    addDiscipline(discipline: DisciplineInput) {
        return this.addDisciplineGql.mutate({ discipline: discipline }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editDiscipline(discipline: DisciplineInput) {
        return this.editDisciplineGql.mutate({ discipline: discipline }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deleteDiscipline(discipline: DisciplineInput) {
        return this.deleteDisciplineGql.mutate({ discipline: discipline }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}