import { Component, OnInit } from '@angular/core';
import { AlertService, DisciplineService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplineGQL } from '../../../../shared/generated/output';
import { Discipline } from '../../../../shared/models';
import { routerTransition } from '../../../../router.animations';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
            .getDiscipline(disciplineId)
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
        this.alertService.sendMessage('Delete service coming soon', 'info');
    }
}
