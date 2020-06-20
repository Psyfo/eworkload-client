import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import {
  Block,
  Discipline,
  Module,
  ModuleInput,
  OfferingType,
  Qualification,
  Venue
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('f', { read: NgForm }) form: NgForm;

  moduleModel: Module = null;
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
    this.getBlocks();
    this.getOfferingTypes();
    this.getQualifications();
    this.getDisciplines();
    this.getVenues();
    this.getModule();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getModule() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          const id = result.get('id');

          this.moduleService
            .module(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
              result => {
                this.moduleModel = result.data.module;

                this.selectedAssessmentMethod = this.assessmentMethods.find(
                  assessementMethod =>
                    assessementMethod.label ===
                    this.moduleModel.assessmentMethod
                );
                this.selectedType = this.types.find(
                  type => type.label === this.moduleModel.type
                );
                this.selectedBlock = this.blocks.find(
                  block => block.blockId === this.moduleModel.blockId
                );
                this.selectedOfferingType = this.offeringTypes.find(
                  offeringType =>
                    offeringType.offeringTypeId ===
                    this.moduleModel.offeringTypeId
                );
                this.selectedQualification = this.qualifications.find(
                  qualification =>
                    qualification.qualificationId ===
                    this.moduleModel.qualificationId
                );
                this.selectedDiscipline = this.disciplines.find(
                  discipline =>
                    discipline.disciplineId === this.moduleModel.disciplineId
                );
                this.selectedVenue = this.venues.find(
                  venue => venue.venueId === this.moduleModel.venueId
                );
              },
              err => {
                console.error(err);
              }
            );
        },
        err => {
          console.error(err);
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
    // Mandatory
    this.moduleInput = {
      id: this.moduleModel.id,
      moduleId: this.moduleModel.moduleId,
      blockId: this.moduleModel.blockId,
      offeringTypeId: this.moduleModel.offeringTypeId,
      qualificationId: this.moduleModel.qualificationId,
      name: this.moduleModel.name,
      assessmentMethod: this.selectedAssessmentMethod.label,
      type: this.selectedType.label,
      nqfLevel: this.moduleModel.nqfLevel,
      credits: this.moduleModel.credits,
      disciplineId: this.selectedDiscipline.disciplineId
    };
    // Optional
    if (this.selectedVenue) {
      this.moduleInput.venueId = this.selectedVenue.venueId;
    }

    setTimeout(() => {
      this.moduleService
        .editModule(this.moduleInput)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(
          result => {
            this.isSubmitting = false;
            this.alertService.successToast(
              `Module ${result.data.editModule.moduleId} edited`
            );
            this.router.navigate(['admin/module']);
          },
          err => {
            console.error(err);
          }
        );
    }, 1000);
  }
  onBack(event) {
    this.router.navigate(['admin/module']);
  }
  onReset(event) {
    this.getModule();
    this.form.form.markAsPristine();
  }
}
