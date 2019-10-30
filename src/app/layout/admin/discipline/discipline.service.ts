import { AlertService } from './../../../shared/modules/alert/alert.service';
import { map } from 'rxjs/operators';
import {
    AddDisciplineGQL,
    DeleteDisciplineGQL,
    DisciplineGQL,
    DisciplineInput,
    DisciplinesGQL,
    EditDisciplineGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DisciplineService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private disciplineGql: DisciplineGQL,
        private disciplinesGql: DisciplinesGQL,
        private addDisciplineGql: AddDisciplineGQL,
        private editDisciplineGql: EditDisciplineGQL,
        private deleteDisciplineGql: DeleteDisciplineGQL
    ) {}

    disciplines() {
        return this.disciplinesGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    discipline(disciplineId: string) {
        return this.disciplineGql
            .watch(
                { disciplineId: disciplineId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    addDiscipline(discipline: DisciplineInput) {
        return this.addDisciplineGql
            .mutate({ discipline: discipline })
            .pipe(map(result => result, err => err));
    }

    editDiscipline(discipline: DisciplineInput) {
        return this.editDisciplineGql
            .mutate({ discipline: discipline })
            .pipe(map(result => result, err => err));
    }

    deleteDiscipline(discipline: DisciplineInput) {
        return this.deleteDisciplineGql
            .mutate({ discipline: discipline })
            .pipe(map(result => result, err => err));
    }
}
