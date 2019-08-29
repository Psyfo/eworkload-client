import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';

@Component({
    selector: 'app-discipline-view',
    templateUrl: './discipline-view.component.html',
    styleUrls: ['./discipline-view.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineViewComponent implements OnInit {
    discipline: Discipline;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.getDiscipline(result.disciplineId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    public getDiscipline(disciplineId: string) {
        this.disciplineService
            .discipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.discipline = <Discipline>(<unknown>result.data.discipline);
            });
    }
    public onEdit() {
        this.router.navigate(
            ['admin/discipline/edit', this.discipline.disciplineId],
            {
                queryParams: {
                    disciplineId: this.discipline.disciplineId
                }
            }
        );
    }
    public onCancel(): void {
        this.router.navigate(['../admin/discipline']);
    }
    public onDelete(): void {
        this.alertService.success('Delete service coming soon');
    }
}
