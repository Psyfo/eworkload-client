import { OnInit, Component } from '@angular/core';
import { AlertService } from '../../../../shared/services';
import { Discipline } from '../../../../shared/models';
import { FormGroup, FormBuilder } from '@angular/forms';
import { routerTransition } from '../../../../router.animations';
import { AddDisciplineGQL } from '../../../../shared/generated/output';
import { Router } from '@angular/router';

@Component({
    selector: 'app-discipline-add',
    templateUrl: './discipline-add.component.html',
    styleUrls: ['./discipline-add.component.scss'],
    animations: [routerTransition()]
})
export class DisciplineAddComponent implements OnInit {
    discipline: Discipline;

    disciplineAddForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private addDiscipline: AddDisciplineGQL
    ) {}

    ngOnInit() {
        this.disciplineAddForm = this.fb.group({
            name: '',
            description: ''
        });
    }

    onAdd() {}
    onBack() {
        this.router.navigate(["../admin/discipline"]);
    }

    onReset() {
        this.disciplineAddForm.reset();
    }
}
