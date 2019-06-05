import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService, DisciplineService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Discipline } from '../../../../shared/models';
import { Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-discipline-edit',
    templateUrl: './discipline-edit.component.html',
    styleUrls: ['./discipline-edit.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineEditComponent implements OnInit {
    discipline: Discipline = new Discipline();

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
                this.alertService.sendMessage('Discipline edited', 'success');

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
