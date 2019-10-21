import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
    Block,
    Discipline,
    ModuleInput,
    OfferingType,
    Qualification,
    Venue
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BlockService } from '../../block/block.service';
import { DisciplineService } from '../../discipline/discipline.service';
import { OfferingTypeService } from '../../offering-type/offering-type.service';
import { QualificationService } from '../../qualification/qualification.service';
import { VenueService } from '../../venue/venue.service';
import { ModuleService } from '../module.service';

@Component({
    selector: 'app-module-add',
    templateUrl: './module-add.component.html',
    styleUrls: ['./module-add.component.scss'],
    animations: [routerTransition()]
})
export class ModuleAddComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    moduleInput: ModuleInput = {};
    qualifications: Qualification[];
    offeringTypes: OfferingType[];
    disciplines: Discipline[];
    venues: Venue[];
    blocks: Block[];

    types = this.moduleService.types;
    assessmentMethods = this.moduleService.assessmentMethods;

    selectedQualification: Qualification;
    selectedOfferingType: OfferingType;
    selectedBlock: Block;
    selectedDiscipline: Discipline;
    selectedVenue: Venue;

    private unsubscribe = new Subject();

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
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getQualifications() {
        this.qualificationService
            .qualifications()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.qualifications = result.data.qualifications;
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
            .blocks()
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
    onSubmit() {
        this.moduleService
            .addModule(this.moduleInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.alertService.success('Module added');

                this.router.navigate(
                    ['admin/module/view', this.moduleInput.moduleId],
                    {
                        queryParams: {
                            moduleId: this.moduleInput.moduleId,
                            blockId: this.moduleInput.blockId,
                            offeringTypeId: this.moduleInput.offeringTypeId,
                            qualificationId: this.moduleInput.qualificationId
                        }
                    }
                );
            });
    }
    onBack(event) {
        this.router.navigate(['admin/module']);
    }
    onReset(event) {
        this.form.reset();
    }
}
