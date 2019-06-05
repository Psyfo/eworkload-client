import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
    DisciplineGQL,
    DisciplinesGQL,
    AddDisciplineGQL,
    EditDisciplineGQL,
    DeleteDisciplineGQL
} from '../generated/output';
import { Discipline } from '../models';
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
                this.errorService.toConsole(result.errors);
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
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    addDiscipline(discipline: Discipline) {
        return this.addDisciplineGql.mutate(discipline).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    editDiscipline(discipline: Discipline) {
        return this.editDisciplineGql.mutate(discipline).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    deleteDiscipline() {}
}
