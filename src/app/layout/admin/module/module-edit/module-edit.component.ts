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
import { ActivatedRoute, Router } from '@angular/router';

import { BlockService } from '../../block/block.service';
import { DisciplineService } from '../../discipline/discipline.service';
import { OfferingTypeService } from '../../offering-type/offering-type.service';
import { QualificationService } from '../../qualification/qualification.service';
import { VenueService } from '../../venue/venue.service';
import { ModuleService } from '../module.service';

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
    animations: [routerTransition()]
})
export class ModuleEditComponent implements OnInit {
    module: Module;
    discipline: Discipline;
    disciplines: Discipline[];
    block: Block;
    blocks: Block[];
    offeringType: OfferingType;
    offeringTypes: OfferingType[];
    qualification: Qualification;
    qualifications: Qualification[];
    venues: Venue[];

    assessmentMethods = this.moduleService.assessmentMethods;
    types = this.moduleService.types;

    moduleEditForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private moduleService: ModuleService,
        private offeringTypeService: OfferingTypeService,
        private blockService: BlockService,
        private qualificationService: QualificationService,
        private disciplineService: DisciplineService,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        this.getOfferingTypes();
        this.getBlocks();
        this.getQualifications();
        this.getDisciplines();
        this.getVenues();
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                const moduleId = result.moduleId;
                this.buildForm(moduleId);
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm(moduleId: string) {
        this.moduleEditForm = this.fb.group({
            moduleId: [{ value: '', disabled: true }, [Validators.required]],
            name: ['', [Validators.required]],
            type: ['', [Validators.required]],
            assessmentMethod: ['', [Validators.required]],
            nqfLevel: ['', [Validators.required]],
            qualificationId: ['', [Validators.required]],
            offeringTypeId: ['', [Validators.required]],
            disciplineId: ['', [Validators.required]],
            venueId: ['', [Validators.required]],
            blockId: ['', [Validators.required]],
            credits: ['', [Validators.required]],
            groupSize: ['', [Validators.required]]
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
    getDisciplines() {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.disciplines = result.data.disciplines.map(
                    discipline => <Discipline>(<unknown>discipline)
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
    getFormData() {
        return this.moduleEditForm.value;
    }
    valueChanges() {}
    onEdit() {
        this.module = this.formVal as Module;

        this.moduleService.editModule(this.module).subscribe(result => {
            this.alertService.success('Module edited');
            this.router.navigate(['admin/module/view', this.moduleId.value], {
                queryParams: {
                    moduleId: this.moduleId.value
                }
            });
        });
    }
    onCancel() {
        this.router.navigate(['admin/module/view', this.moduleId.value], {
            queryParams: {
                moduleId: this.moduleId.value
            }
        });
    }
    onReset() {
        this.moduleEditForm.reset();
        this.ngOnInit();
    }

    // Getters
    get moduleId() {
        return this.moduleEditForm.get('moduleId');
    }
    get name() {
        return this.moduleEditForm.get('name');
    }
    get type() {
        return this.moduleEditForm.get('type');
    }
    get assessmentMethod() {
        return this.moduleEditForm.get('assessmentMethod');
    }
    get nqfLevel() {
        return this.moduleEditForm.get('nqfLevel');
    }
    get qualificationId() {
        return this.moduleEditForm.get('qualificationId');
    }
    get offeringTypeId() {
        return this.moduleEditForm.get('offeringTypeId');
    }
    get disciplineId() {
        return this.moduleEditForm.get('disciplineId');
    }
    get blockId() {
        return this.moduleEditForm.get('blockId');
    }
    get credits() {
        return this.moduleEditForm.get('credits');
    }
    get venueId() {
        return this.moduleEditForm.get('venueId');
    }
    get formVal() {
        return this.moduleEditForm.getRawValue();
    }
}
