import { Component, OnInit, SimpleChanges } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import {
    AlertService,
    ModuleService,
    DisciplineService
} from '../../../../shared/services';
import {
    FormBuilder,
    FormGroup,
    FormArray,
    FormControl,
    Validators
} from '@angular/forms';
import {
    Discipline,
    Module,
    User,
    Venue
} from '../../../../shared/models';
import {
    ModuleGQL,
    ModulesGQL,
    DisciplineGQL,
    DisciplinesGQL,
    UserGQL,
    UsersGQL,
    ModulesByDisciplineGQL,
    VenuesGQL
} from '../../../../shared/generated/output';
import { UserService } from '../../../../shared/services/user.service';
import { VenueService } from '../../../../shared/services/venue.service';

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
    disciplines: Discipline[] = [];
    discipline: Discipline = new Discipline();
    moduleId: string;
    modules: Module[];
    module: Module;
    venue: Venue;
    venues: Venue[];

    moduleDropdown: boolean = false;
    stackRadio: boolean = false;
    isStacked: boolean = false;

    prepModuleForm: FormGroup;
    constructor(
        private alertService: AlertService,
        private fb: FormBuilder,
        private userGql: UserGQL,
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

    buildForm() {}

    initializeForm() {}

    getFormData() {
        this.disciplineId = this.prepModuleForm.get('discipline').value;
        this.moduleId = this.prepModuleForm.get('module').value;
        this.getDiscipline(this.disciplineId);
    }

    getUser() {
        this.userService.currentUser().subscribe(result => {
            this.user = <User>(<unknown>result.data.user);
        });
    }

    getUsers() {
        this.userService.getUsers().subscribe(result => {
            this.users = result.data.users.map(user => <User>(<unknown>user));
        });
    }

    getDiscipline(disciplineId: string) {
        this.disciplineService.getDiscipline(disciplineId).subscribe(result => {
            this.discipline = <Discipline><unknown>result.data.discipline;
        })
    }

    getDisciplines() {
        this.disciplineService.getDisciplines().subscribe(result => {
            this.disciplines = result.data.disciplines.map(
                discipline => <Discipline>(<unknown>discipline)
            );
        });
    }

    getModulesByDiscipline(disciplineId: string) {
        this.moduleService
            .getModulesByDiscipline(disciplineId)
            .subscribe(result => {
                this.modules = result.data.modulesByDiscipline.map(
                    module => <Module>(<unknown>module)
                );
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
