import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import {
    Module,
    Qualification,
    OfferingType,
    Discipline,
    Venue,
    Block
} from '../../../../shared/models';
import {
    AlertService,
    BlockService,
    DisciplineService,
    ModuleService,
    OfferingTypeService,
    QualificationService,
    VenueService
} from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
    selector: 'app-module-add',
    templateUrl: './module-add.component.html',
    styleUrls: ['./module-add.component.scss'],
    animations: [routerTransition()]
})
export class ModuleAddComponent implements OnInit {
    module: Module = new Module();
    qualifications: Qualification[];
    offeringTypes: OfferingType[];
    disciplines: Discipline[];
    venues: Venue[];
    blocks: Block[];

    types = this.moduleService.types;
    assessmentMethods = this.moduleService.assessmentMethods;
    studyPeriods = this.moduleService.studyPeriods;

    private unsubscribe = new Subject();

    moduleAddForm: FormGroup;

    constructor(
        private router: Router,
        private alertService: AlertService,
        private fb: FormBuilder,
        private moduleService: ModuleService,
        private qualificationService: QualificationService,
        private offeringTypeService: OfferingTypeService,
        private disciplineService: DisciplineService,
        private venueService: VenueService,
        private blockService: BlockService
    ) {}

    ngOnInit() {
        console.log(this.module);

        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.getQualifications();
        this.getBlocks();
        this.getDisciplines();
        this.getOfferingTypes();
        this.getVenues();

        this.moduleAddForm = this.fb.group({
            moduleId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            assessmentMethod: ['', [Validators.required]],
            nqfLevel: ['', [Validators.required]],
            qualificationId: ['', [Validators.required]],
            offeringTypeId: ['', [Validators.required]],
            disciplineId: ['', [Validators.required]],
            venueId: ['', [Validators.required]],
            blockId: ['', [Validators.required]],
            credits: ['', [Validators.required]]
        });
    }
    getQualifications() {
        this.qualificationService
            .getQualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualifications.map(
                    qualification => <Qualification>(<unknown>qualification)
                );
            });
    }
    getOfferingTypes() {
        this.offeringTypeService
            .getOfferingTypes()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.offeringTypes = result.data.offeringTypes.map(
                    offeringType => <OfferingType>(<unknown>offeringType)
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
    getBlocks() {
        this.blockService
            .getBlocks()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.blocks = result.data.blocks.map(
                    block => <Block>(<unknown>block)
                );
            });
    }
    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venues = result.data.venues.map(
                    venue => <Venue>(<unknown>venue)
                );
            });
    }
    onAdd() {
        this.module.moduleId = this.moduleId.value;
        this.module.name = this.name.value;
        this.module.type = this.type.value;
        this.module.assessmentMethod = this.assessmentMethod.value;
        this.module.nqfLevel = this.nqfLevel.value;
        this.module.qualificationId = this.qualificationId.value;
        this.module.offeringTypeId = this.offeringTypeId.value;
        this.module.disciplineId = this.disciplineId.value;
        this.module.venueId = this.venueId.value;
        this.module.blockId = this.blockId.value;
        this.module.credits = this.credits.value;

        this.moduleService
            .addModule(this.module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.sendMessage('Module added', 'success');

                this.router.navigate(
                    ['admin/module/view', this.moduleId.value],
                    {
                        queryParams: {
                            moduleId: this.moduleId.value
                        }
                    }
                );
            });
    }
    onCancel() {
        this.router.navigate(['../admin']);
    }
    onReset() {
        this.moduleAddForm.reset();
    }

    // Getters
    get moduleId() {
        return this.moduleAddForm.get('moduleId');
    }
    get name() {
        return this.moduleAddForm.get('name');
    }
    get type() {
        return this.moduleAddForm.get('type');
    }
    get assessmentMethod() {
        return this.moduleAddForm.get('assessmentMethod');
    }
    get nqfLevel() {
        return this.moduleAddForm.get('nqfLevel');
    }
    get qualificationId() {
        return this.moduleAddForm.get('qualificationId');
    }
    get offeringTypeId() {
        return this.moduleAddForm.get('offeringTypeId');
    }
    get disciplineId() {
        return this.moduleAddForm.get('disciplineId');
    }
    get blockId() {
        return this.moduleAddForm.get('blockId');
    }
    get credits() {
        return this.moduleAddForm.get('credits');
    }
    get formVal() {
        return this.moduleAddForm.getRawValue();
    }
    get venueId() {
        return this.moduleAddForm.get('venueId');
    }
}
