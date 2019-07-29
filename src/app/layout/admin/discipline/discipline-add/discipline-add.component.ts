import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';

@Component({
    selector: 'app-discipline-add',
    templateUrl: './discipline-add.component.html',
    styleUrls: ['./discipline-add.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineAddComponent implements OnInit {
    discipline: Discipline;

    disciplineAddForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private disciplineService: DisciplineService
    ) {}

    ngOnInit() {
        this.disciplineAddForm = this.fb.group({
            disciplineId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            description: ['', [Validators.required]]
        });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    // Getters
    get disciplineId() {
        return this.disciplineAddForm.get('disciplineId');
    }
    get name() {
        return this.disciplineAddForm.get('name');
    }
    get description() {
        return this.disciplineAddForm.get('description');
    }
    get formVal() {
        return this.disciplineAddForm.value;
    }

    // Methods
    onAdd() {
        this.discipline = this.formVal;
        this.disciplineService
            .addDiscipline(this.discipline)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                const newDiscipline = result.data.addDiscipline;
                console.log(newDiscipline);
                this.alertService.success('Discipline added');
                this.router.navigate(
                    ['admin/discipline/view', newDiscipline.disciplineId],
                    {
                        queryParams: {
                            disciplineId: newDiscipline.disciplineId
                        }
                    }
                );
            });
    }
    onCancel() {
        this.router.navigate(['../admin/discipline']);
    }
    onReset() {
        this.disciplineAddForm.reset();
        this.ngOnInit();
    }
}
