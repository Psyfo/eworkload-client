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
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { BlockService } from '../../block/block.service';
import { DisciplineService } from '../../discipline/discipline.service';
import { OfferingTypeService } from '../../offering-type/offering-type.service';
import { QualificationService } from '../../qualification/qualification.service';
import { VenueService } from '../../venue/venue.service';
import { ModuleService } from '../module.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
    selector: 'app-module-add',
    templateUrl: './module-add.component.html',
    styleUrls: ['./module-add.component.scss'],
    animations: [routerTransition()]
})
export class ModuleAddComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { read: NgForm }) form: NgForm;

    moduleInput: ModuleInput = {};
    selectedDiscipline: Discipline;
    disciplines: Discipline[] = [];
    selectedBlock: Block;
    blocks: Block[] = [];
    selectedOfferingType: OfferingType;
    offeringTypes: OfferingType[] = [];
    selectedQualification: Qualification;
    qualifications: Qualification[] = [];
    selectedVenue: Venue;
    venues: Venue[] = [];
    isSubmitting: boolean;

    assessmentMethods = this.moduleService.assessmentMethods;
    selectedAssessmentMethod: SelectItem;
    types = this.moduleService.types;
    selectedType: SelectItem;

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private alertService: AlertService,
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
        this.getBlocks();
        this.getOfferingTypes();
        this.getQualifications();
        this.getDisciplines();
        this.getVenues();
        this.getVenues();
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getBlocks() {
        this.blockService
            .blocks()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.blocks = result.data.blocks;
                },
                err => {
                    console.error(err);
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
                },
                err => {
                    console.error(err);
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
                },
                err => {
                    console.error(err);
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
                },
                err => {
                    console.error(err);
                }
            );
    }
    getVenues() {
        this.venueService
            .getVenues()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.venues = result.data.venues.map(venue => {
                        const label = `${venue.venueId} (${venue.type})`;
                        let modifiedVenue: any = venue;
                        modifiedVenue.label = label;
                        return modifiedVenue;
                    });
                },
                err => {
                    console.error(err);
                }
            );
    }
    onSubmit() {
        this.isSubmitting = true;

        this.moduleInput.blockId = this.selectedBlock.blockId;
        this.moduleInput.offeringTypeId = this.selectedOfferingType.offeringTypeId;
        this.moduleInput.qualificationId = this.selectedQualification.qualificationId;
        this.moduleInput.disciplineId = this.selectedDiscipline.disciplineId;
        this.moduleInput.venueId = this.selectedVenue.venueId;

        setTimeout(() => {
            this.moduleService
                .addModule(this.moduleInput)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(result => {
                    this.isSubmitting = false;
                    this.alertService.successToast(
                        `Module ${result.data.addModule.moduleId} added`
                    );

                    this.router.navigate(
                        ['admin/module/view', this.moduleInput.moduleId],
                        {
                            queryParams: {
                                moduleId: this.moduleInput.moduleId,
                                blockId: this.moduleInput.blockId,
                                offeringTypeId: this.moduleInput.offeringTypeId,
                                qualificationId: this.moduleInput
                                    .qualificationId
                            }
                        }
                    );
                });
        }, 1000);
    }
    onBack(event) {
        this.router.navigate(['admin/module']);
    }
    onReset(event) {
        this.form.reset();
    }
}
