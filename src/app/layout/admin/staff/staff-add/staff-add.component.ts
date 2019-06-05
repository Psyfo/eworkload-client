import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import {
    Discipline,
    Position,
    User,
    WorkFocus
} from '../../../../shared/models';
import {
    DisciplineService,
    UserService,
    WorkFocusService,
    AlertService
} from '../../../../shared/services';
import { PositionService } from '../../../../shared/services/position.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-staff-add',
    templateUrl: './staff-add.component.html',
    styleUrls: ['./staff-add.component.scss'],
    animations: [routerTransition()]
})
export class StaffAddComponent implements OnInit {
    user: User = new User();
    positions: Position[];
    disciplines: Discipline[];
    workFocuses: WorkFocus[];
    selectedFile: File;

    nationalities = ['Black', 'Coloured', 'Indian', 'White'];
    genders = ['Male', 'Female'];

    private unsubscribe = new Subject();

    uploading = false;
    progress: number;

    staffAddForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private positionService: PositionService,
        private disciplineService: DisciplineService,
        private workFocusService: WorkFocusService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.staffAddForm = this.fb.group({
            userId: ['', Validators.required],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            nationality: ['', Validators.required],
            positionId: ['', Validators.required],
            disciplineId: ['', Validators.required],
            workFocusName: ['', Validators.required],
            gender: ['', Validators.required],
            email: [
                '',
                Validators.compose([Validators.required, Validators.email])
            ],
            photoUrl: ['']
        });

        this.getDisciplines();
        this.getPositions();
        this.getWorkFocuses();
    }

    getFormValues() {
        const formVal = this.staffAddForm.value;
        this.user = formVal;
        this.user.photoUrl = '';
        console.log(this.user);
        // this.user.userId = formVal.userId;
        // this.user.firstName = this.staffAddForm.get('firstName').value;
        // this.user.lastName = this.staffAddForm.get('lastName').value;
        // this.user.password = this.staffAddForm.get('password').value;
        // this.user.email = this.staffAddForm.get('email').value;
        // this.user.positionId = this.staffAddForm.get('positionId').value;
        // this.user.disciplineId = this.staffAddForm.get('disiciplineId').value;
        // this.user.nationality = this.staffAddForm.get('nationality').value;
        // this.user.gender = this.staffAddForm.get('gender').value;
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
        const myReader: FileReader = new FileReader();

        myReader.onprogress = event => {
            if (event.lengthComputable) {
                this.progress = (event.loaded / event.total) * 100;
            }
        };
    }
    OnUpload() {}

    getPositions() {
        this.positionService
            .getPositions()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.positions = result.data.positions.map(
                    position => position
                );
            });
    }

    getDisciplines() {
        this.disciplineService
            .getDisciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines.map(
                    discipline => <Discipline>(<unknown>discipline)
                );
            });
    }

    getWorkFocuses() {
        this.workFocusService
            .getWorkFocuses()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.workFocuses = result.data.workFocuses.map(
                    workFocus => <WorkFocus>(<unknown>workFocus)
                );
            });
    }

    onAdd() {
        this.getFormValues();
        this.userService
            .addUser(this.user)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                console.log(result.data.addUser);
                this.alertService.sendMessage('Added new user ', 'success');
                this.router.navigate(['../admin/staff']);
            });
    }

    onBack() {
        this.router.navigate(['../admin/staff']);
    }

    onReset() {
        this.staffAddForm.reset();
    }
}
