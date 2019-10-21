import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';

import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';

@Component({
    selector: 'app-discipline-list',
    templateUrl: './discipline-list.component.html',
    styleUrls: ['./discipline-list.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineListComponent implements OnInit {
    discipline: Discipline;
    disciplines: Discipline[];

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {}
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Methods
    getDisciplines() {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines.map(
                    discipline => <Discipline>(<unknown>discipline)
                );
            });
    }

    onAdd() {
        this.router.navigate(['admin/discipline/add']);
    }
}
