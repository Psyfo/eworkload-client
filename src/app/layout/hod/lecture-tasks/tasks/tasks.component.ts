import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DisciplineService } from 'src/app/layout/admin/discipline/discipline.service';
import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { VenueService } from 'src/app/layout/admin/venue/venue.service';
import { routerTransition } from 'src/app/router.animations';
import { Discipline, Module, User, Venue } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    animations: [routerTransition()]
})
export class TasksComponent implements OnInit {
    userId: string;
    user: User;
    users: User[];
    disciplineId: string;
    disciplines: Discipline[];
    discipline: Discipline;
    moduleId: string;
    modules: Module[];
    module: Module;
    venue: Venue;
    venues: Venue[];

    moduleDropdown: boolean = false;
    stackRadio: boolean = false;
    isStacked: boolean = false;

    prepModuleForm: FormGroup;

    unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private fb: FormBuilder,
        private userService: UserService,
        private moduleService: ModuleService,
        private disciplineService: DisciplineService,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        this.prepModuleForm = this.fb.group({
            discipline: ['', Validators.required],
            module: ['', Validators.required]
        });

        this.getUser();
        this.getDisciplines();
        this.getVenues();
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.getFormData();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {}

    initializeForm() {}

    getFormData() {
        this.disciplineId = this.prepModuleForm.get('discipline').value;
        this.moduleId = this.prepModuleForm.get('module').value;
        this.getDiscipline(this.disciplineId);
    }

    getUser() {
        this.userService
            .currentUser()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.user = result.data.user;
            });
    }

    getUsers() {
        this.userService
            .getUsers()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.users = result.data.users;
            });
    }

    getDiscipline(disciplineId: string) {
        this.disciplineService
            .getDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.discipline = result.data.discipline;
            });
    }

    getDisciplines() {
        this.disciplineService
            .getDisciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines;
            });
    }

    getModulesByDiscipline(disciplineId: string) {
        this.moduleService
            .getModulesByDiscipline(disciplineId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.modules = result.data.modulesByDiscipline;
            });
    }

    getVenues() {}

    calcGroupSize(): number {
        return 0;
    }

    addModules() {}
    moduleArray: any;
    getModuleArray() {
        this.moduleArray = this.prepModuleForm.controls.moduleList as FormArray;
    }

    addUsers() {
        const userItems = this.prepModuleForm.controls.usersList as FormArray;
        userItems.push(
            this.fb.group({
                userId: ''
            })
        );

        console.log(userItems);
    }

    onSelectedDiscipline(event) {
        const disciplineId = this.prepModuleForm.get('discipline').value;
        this.getModulesByDiscipline(disciplineId);
        this.moduleDropdown = true;
        this.getFormData();
    }

    onSelectedModule(event) {
        this.stackRadio = true;
        this.getFormData();
    }

    onSelectedStack(event) {
        const target = event.target.id;
        console.log(target);

        if (target == 'stacked') {
            this.isStacked = true;
        } else {
            this.isStacked = false;
        }
    }

    onStacked() {}

    sharedOptions = ['Not Shared', 'Shared'];
    sharedModules: Module[];
    onSharedChanged() {}

    onVenueSelected() {}

    onAdd() {}

    onReset() {
        this.moduleDropdown = false;
        this.stackRadio = false;
        this.isStacked = false;
        this.prepModuleForm.reset();
    }
}
