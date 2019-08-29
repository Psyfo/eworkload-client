import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
    Block,
    Discipline,
    Module,
    OfferingType,
    Qualification,
    Venue
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlockService } from '../../block/block.service';
import { DisciplineService } from '../../discipline/discipline.service';
import { OfferingTypeService } from '../../offering-type/offering-type.service';
import { QualificationService } from '../../qualification/qualification.service';
import { VenueService } from '../../venue/venue.service';
import { ModuleService } from '../module.service';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
    selector: 'app-module-add',
    templateUrl: './module-add.component.html',
    styleUrls: ['./module-add.component.scss'],
    animations: [routerTransition()]
})
export class ModuleAddComponent implements OnInit {
    breadcrumbs: MenuItem[];

    module: Module;
    qualifications: Qualification[];
    offeringTypes: OfferingType[];
    disciplines: Discipline[];
    venues: Venue[];
    blocks: Block[];

    types = this.moduleService.types;
    assessmentMethods = this.moduleService.assessmentMethods;

    selectedType;
    selectedAssessmentMethod;
    selectedQualification: Qualification;
    selectedOfferingType: OfferingType;
    selectedBlock: Block;
    selectedDiscipline: Discipline;
    selectedVenue: Venue;

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
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'module', url: 'admin/module' },
            { label: 'add', url: 'admin/module/add' }
        ];
        this.getQualifications();
        this.getBlocks();
        this.getDisciplines();
        this.getOfferingTypes();
        this.getVenues();

        this.buildForm();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.moduleAddForm = this.fb.group({
            moduleId: ['', [Validators.required]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            assessmentMethod: ['', [Validators.required]],
            nqfLevel: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            offeringType: ['', [Validators.required]],
            discipline: ['', [Validators.required]],
            venue: ['', [Validators.required]],
            block: ['', [Validators.required]],
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
                this.offeringTypes = result.data.offeringTypes;
            });
    }
    getDisciplines() {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines;
            });
    }
    getBlocks() {
        this.blockService
            .getBlocks()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.blocks = result.data.blocks;
            });
    }
    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.venues = result.data.venues;
            });
    }
    onAdd() {
        this.module.moduleId = this.moduleId.value;
        this.module.name = this.name.value;
        this.module.type = this.type.value;
        this.module.assessmentMethod = this.assessmentMethod.value;
        this.module.nqfLevel = this.nqfLevel.value;
        this.module.qualificationId = this.selectedQualification.qualificationId;
        this.module.offeringTypeId = this.selectedOfferingType.offeringTypeId;
        this.module.disciplineId = this.selectedDiscipline.disciplineId;
        this.module.venueId = this.selectedVenue.venueId;
        this.module.blockId = this.selectedBlock.blockId;
        this.module.credits = this.credits.value;

        this.moduleService
            .addModule(this.module)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Module added');

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
    onBack() {
        this.router.navigate(['admin/module']);
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
    get qualification() {
        return this.moduleAddForm.get('qualification');
    }
    get offeringType() {
        return this.moduleAddForm.get('offeringType');
    }
    get discipline() {
        return this.moduleAddForm.get('discipline');
    }
    get block() {
        return this.moduleAddForm.get('block');
    }
    get credits() {
        return this.moduleAddForm.get('credits');
    }
    get formVal() {
        return this.moduleAddForm.getRawValue();
    }
    get venue() {
        return this.moduleAddForm.get('venue');
    }
}
