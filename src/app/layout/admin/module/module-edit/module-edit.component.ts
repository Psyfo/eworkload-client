import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../../../../router.animations';
import {
    Block,
    Discipline,
    Module,
    OfferingType,
    Qualification,
    Venue
} from '../../../../shared/models';
import {
    ModuleService,
    DisciplineService,
    VenueService,
    AlertService
} from '../../../../shared/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OfferingTypeService } from '../../../../shared/services/offering-type.service';
import { BlockService } from '../../../../shared/services/block.service';
import { QualificationService } from '../../../../shared/services/qualification.service';

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
    animations: [routerTransition()]
})
export class ModuleEditComponent implements OnInit {
    module: Module = new Module();
    discipline: Discipline = new Discipline();
    disciplines: Discipline[];
    block: Block = new Block();
    blocks: Block[];
    offeringType: OfferingType = new OfferingType();
    offeringTypes: OfferingType[];
    qualification: Qualification = new Qualification();
    qualifications: Qualification[];
    venues: Venue[];

    assessmentMethods = this.moduleService.assessmentMethods;
    types = this.moduleService.types;
    studyPeriods = this.moduleService.studyPeriods;

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

        // this.moduleService
        //     .getModule(moduleId)
        //     .pipe(takeUntil(this.unsubscribe))
        //     .subscribe(result => {
        //         this.module = <Module>(<unknown>result.data.module);
        //         this.moduleEditForm.patchValue(this.module);
        //     });
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
            .getDisciplines()
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
            this.alertService.sendMessage('Module edited', 'success');
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
