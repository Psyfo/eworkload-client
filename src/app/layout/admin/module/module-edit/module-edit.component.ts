import { MenuItem } from 'primeng/components/common/menuitem';
import { ModuleInput } from './../../../../shared/generated/output';
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

import { Component, OnInit, ViewChild } from '@angular/core';
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
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    module: Module;
    moduleInput: ModuleInput = {};
    selectedDiscipline: Discipline;
    disciplines: Discipline[];
    selectedBlock: Block;
    blocks: Block[];
    selectedOfferingType: OfferingType;
    offeringTypes: OfferingType[];
    selectedQualification: Qualification;
    qualifications: Qualification[];
    selectedVenue: Venue;
    venues: Venue[];

    assessmentMethods = this.moduleService.assessmentMethods;
    types = this.moduleService.types;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private moduleService: ModuleService,
        private offeringTypeService: OfferingTypeService,
        private blockService: BlockService,
        private qualificationService: QualificationService,
        private disciplineService: DisciplineService,
        private venueService: VenueService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'module', url: 'admin/module' },
            { label: 'edit', url: 'admin/module/edit' }
        ];
        this.getRouteParams();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getRouteParams() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const moduleId = result.get('moduleId');
                    const blockId = result.get('blockId');
                    const offeringTypeId = result.get('offeringTypeId');
                    const qualificationId = result.get('qualificationId');

                    this.getModule(
                        moduleId,
                        blockId,
                        offeringTypeId,
                        qualificationId
                    );
                    this.getOfferingTypes();
                    this.getBlocks();
                    this.getQualifications();
                    this.getDisciplines();
                    this.getVenues();
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getModule(
        moduleId: string,
        blockId: string,
        offeringTypeId: string,
        qualificationId: string
    ) {
        this.moduleService
            .module(moduleId, blockId, offeringTypeId, qualificationId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.module = result.data.module;
                    this.moduleInput = this.module as ModuleInput;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getBlocks() {
        this.blockService
            .blocks()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.blocks = result.data.blocks;
                    this.selectedBlock = this.blocks.find(
                        block => block.blockId === this.module.blockId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getOfferingTypes() {
        this.offeringTypeService
            .getOfferingTypes()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.offeringTypes = result.data.offeringTypes;
                    this.selectedOfferingType = this.offeringTypes.find(
                        offeringType =>
                            offeringType.offeringTypeId ===
                            this.module.offeringTypeId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getQualifications() {
        this.qualificationService
            .qualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.qualifications = result.data.qualifications;
                    this.selectedQualification = this.qualifications.find(
                        qualification =>
                            qualification.qualificationId ===
                            this.module.qualificationId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getDisciplines() {
        this.disciplineService
            .disciplines()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.disciplines = result.data.disciplines;
                    this.selectedDiscipline = this.disciplines.find(
                        discipline =>
                            discipline.disciplineId === this.module.disciplineId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.venues = result.data.venues;
                    this.selectedVenue = this.venues.find(
                        venue => venue.venueId === this.module.venueId
                    );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    onSubmit() {}
    onBack(event) {
        this.router.navigate(['admin/module']);
    }
    onReset(event) {
        this.selectedDiscipline = null;
        this.selectedBlock = null;
        this.selectedOfferingType = null;
        this.selectedQualification = null;
        this.getRouteParams();
    }
}
