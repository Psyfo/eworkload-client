import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { DisciplineService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-discipline-edit',
    templateUrl: './discipline-edit.component.html',
    styleUrls: ['./discipline-edit.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineEditComponent implements OnInit {
    discipline: Discipline;

    private unsubscribe = new Subject();

    disciplineEditForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.buildForm(result.disciplineId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Getters
    get disciplineId() {
        return this.disciplineEditForm.get('disciplineId');
    }
    get name() {
        return this.disciplineEditForm.get('name');
    }
    get description() {
        return this.disciplineEditForm.get('description');
    }
    get formVal() {
        return this.disciplineEditForm.getRawValue();
    }

    // Methods
    buildForm(disciplineId: string) {
        this.disciplineEditForm = this.fb.group({
            disciplineId: [
                { value: '', disabled: true },
                [Validators.required]
            ],
            name: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
        this.disciplineService
            .getDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.discipline = <Discipline>(<unknown>result.data.discipline);

                this.disciplineEditForm.patchValue(this.discipline);
            });
    }
    onEdit() {
        this.discipline = this.formVal;

        this.disciplineService
            .editDiscipline(this.discipline)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Discipline edited');

                this.router.navigate(
                    ['admin/discipline/view', this.disciplineId.value],
                    {
                        queryParams: {
                            disciplineId: this.disciplineId.value
                        }
                    }
                );
            });
    }
    onCancel() {
        this.router.navigate(
            ['admin/discipline/view', this.discipline.disciplineId],
            {
                queryParams: {
                    disciplineId: this.discipline.disciplineId
                }
            }
        );
    }
    onReset() {
        this.disciplineEditForm.reset();
        this.ngOnInit();
    }
}
