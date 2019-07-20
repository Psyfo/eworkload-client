import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import {
    AddDisciplineGQL,
    DeleteDisciplineGQL,
    DisciplineGQL,
    DisciplineInput,
    DisciplinesGQL,
    EditDisciplineGQL
} from '../generated/output';

@Injectable({
    providedIn: 'root'
})
export class DisciplineService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private disciplineGql: DisciplineGQL,
        private disciplinesGql: DisciplinesGQL,
        private addDisciplineGql: AddDisciplineGQL,
        private editDisciplineGql: EditDisciplineGQL,
        private deleteDisciplineGql: DeleteDisciplineGQL
    ) {}

    getDisciplines() {
        return this.disciplinesGql
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

    getDiscipline(disciplineId: string) {
        return this.disciplineGql
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
