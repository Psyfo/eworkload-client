import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DisciplineGQL } from '../../../../shared/generated/output';
import { Discipline } from '../../../../shared/models';
import { routerTransition } from '../../../../router.animations';

@Component({
    selector: 'app-discipline-view',
    templateUrl: './discipline-view.component.html',
    styleUrls: ['./discipline-view.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineViewComponent implements OnInit {
    disciplineId: string;
    discipline: Discipline;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private disciplineGql: DisciplineGQL
    ) {}

    ngOnInit() {
        this.disciplineId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    public onEdit() {
        this.router.navigate(['admin/discipline/edit', this.disciplineId]);
    }

    public onBack(): void {
        this.router.navigate(['../admin/discipline']);
    }

    public onDelete(): void {
        this.alertService.sendMessage('Delete service coming soon', 'info');
    }
}
