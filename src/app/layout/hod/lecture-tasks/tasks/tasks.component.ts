import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {
    Discipline,
    Module,
    User,
    LectureStack
} from '../../../../shared/models';
import {
    ModuleGQL,
    ModulesGQL,
    DisciplineGQL,
    DisciplinesGQL,
    UserGQL,
    UsersGQL,
    ModulesByDisciplineGQL
} from '../../../../shared/generated/output';
import { UserService } from '../../../../shared/services/user.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    animations: [routerTransition()]
})
export class TasksComponent implements OnInit {
    loading: boolean;
    errors: any;
    userId: string;
    user: User;
    users: User[];
    disciplineId: string;
    disciplines: Discipline[];
    discipline: Discipline;
    modules: Module[];
    module: Module;
    moduleStackCard: boolean = false;
    moduleSharedCard: boolean = false;

    prepModuleForm: FormGroup;
    constructor(
        private alertService: AlertService,
        private fb: FormBuilder,
        private moduleGql: ModuleGQL,
        private modulesGql: ModulesGQL,
        private modulesByDisciplineGql: ModulesByDisciplineGQL,
        private disciplineGql: DisciplineGQL,
        private disciplinesGql: DisciplinesGQL,
        private userGql: UserGQL,
        private usersGql: UsersGQL,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.prepModuleForm = this.fb.group({
            disciplineSelect: '',
            sharedSelect: '',
            venueSelect: '',
            moduleCheck: this.fb.array([]),
            moduleCheck2: this.fb.array([]),
            usersList: this.fb.array([]),
            groups: ''
        });

        console.log(this.prepModuleForm.controls);

        this.getUser();
        this.getDisciplines();
        this.getModules();
    }

    getUser() {
        // Get current user ID
        this.userService.currentUserId().subscribe(userId => {
            this.userId = userId;
            console.log(`Current user id: ${this.userId}`);

            // Fetch user data
            this.userGql
                .watch({ userId: this.userId })
                .valueChanges.subscribe(result => {
                    this.loading = result.loading;
                    this.user = result.data.user as User;
                    if (result.errors) {
                        this.errors = result.errors;
                        console.log(result.errors);
                    }
                });
        });
    }

    getUsers() {
        this.usersGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.users = result.data.users as User[];
            if (result.errors) {
                this.errors = result.errors;
                console.log(result.errors);
            }
        });
    }

    getDisciplines() {
        this.disciplinesGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.disciplines = result.data.disciplines as Discipline[];
            if (result.errors) {
                this.errors = result.errors;
                console.log(result.errors);
            }
        });
    }

    getModules() {
        this.modulesGql.watch().valueChanges.subscribe(result => {
            this.loading = result.loading;
            this.modules = result.data.modules as any[];
            if (result.errors) {
                this.errors = result.errors;
                console.log(result.errors);
            }
        });
    }

    addModules() {
        const modulesItems = this.prepModuleForm.controls
            .moduleList as FormArray;
        modulesItems.push(
            this.fb.group({
                moduleItem: ''
            })
        );
    }
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

    disciplineSelected: boolean;
    onDisciplineChanged() {
        this.moduleSharedCard == false;

        this.disciplineId = this.prepModuleForm.controls[
            'disciplineSelect'
        ].value;

        this.modulesByDisciplineGql
            .watch({ disciplineId: this.disciplineId })
            .valueChanges.subscribe(result => {
                this.loading = result.loading;
                this.modules = result.data.modulesByDiscipline as any[];
                console.log(this.modules);

                if (result.errors) {
                    this.errors = result.errors;
                    console.log(result.errors);
                }

                this.modules.map((o, i) => {
                    const control = new FormControl(i === 0);
                    (this.prepModuleForm.controls
                        .moduleCheck as FormArray).push(control);
                });
            });

        this.moduleStackCard = true;
        this.disciplineSelected = true;
    }

    onStacked() {}

    sharedOptions = ['Not Shared', 'Shared'];
    sharedModules: Module[];
    onSharedChanged() {
        if (this.prepModuleForm.controls['sharedSelect'].value === 'Shared') {
            this.moduleSharedCard = true;
        } else if (
            this.prepModuleForm.controls['sharedSelect'].value === 'Not Shared'
        ) {
            this.moduleSharedCard = false;
        }

        this.disciplineId = this.prepModuleForm.controls[
            'disciplineSelect'
        ].value;

        this.modulesByDisciplineGql
            .watch({ disciplineId: this.disciplineId })
            .valueChanges.subscribe(result => {
                this.loading = result.loading;
                this.sharedModules = result.data.modulesByDiscipline as any[];

                if (result.errors) {
                    this.errors = result.errors;
                    console.log(result.errors);
                }

                this.sharedModules.map((o, i) => {
                    const control = new FormControl(i === 0);
                    (this.prepModuleForm.controls
                        .moduleCheck2 as FormArray).push(control);
                });
            });

        this.moduleSharedCard = true;
    }

    onAdd() {}

    onReset() {
        this.prepModuleForm.reset();
    }
}
