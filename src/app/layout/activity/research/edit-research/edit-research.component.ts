import { MenuItem } from 'primeng/api/menuitem';
import { SelectItem } from 'primeng/api/selectitem';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { routerTransition } from 'src/app/router.animations';
import {
  ResearchActivity,
  ResearchActivityInput
} from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ResearchService } from '../research.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-research',
  templateUrl: './edit-research.component.html',
  styleUrls: ['./edit-research.component.scss'],
  animations: [routerTransition()]
})
export class EditResearchComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f', { read: NgForm }) form: NgForm;

  outputs = this.researchService.outputTypes;
  selectedOutput: SelectItem;
  selectedTitle: string = '';
  selectedDates: Date[];
  conferenceActivities = this.researchService.conferenceActivities;
  selectedConferenceActivities: SelectItem[] = [];
  activityModel: ResearchActivity;
  activityInput: ResearchActivityInput = {};
  selectedAuthors: string[] = [];
  selectedUrl = '';
  selectedDetails = '';
  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private researchService: ResearchService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'activity' },
      { label: 'research' },
      { label: 'add' }
    ];
    this.getActivity();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  getActivity() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          const activityId = result.get('activityId');
          this.researchService
            .researchActivity(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
              (result) => {
                this.activityModel = result.data.researchActivity;
                this.selectedOutput = this.outputs.find(
                  (output) => output.label === this.activityModel.output
                );
                this.selectedDates = this.activityModel.dates.map(
                  (dateString) => {
                    return new Date(dateString);
                  }
                );

                this.selectedConferenceActivities = this.conferenceActivities.filter(
                  function (conferenceActivity) {
                    return this.indexOf(conferenceActivity.label) >= 0;
                  },
                  this.activityModel.conferenceActivities
                );
                this.selectedAuthors = this.activityModel.authors;
                this.selectedTitle = this.activityModel.title;
                this.selectedUrl = this.activityModel.url;
                this.selectedDetails = this.activityModel.details;
              },
              (err) => {
                this.alertService.errorToast(err);
                console.warn(err);
              }
            );
        },
        (err) => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }
  onSubmit() {
    this.isSubmitting = true;

    this.activityInput = {
      activityId: this.activityModel.activityId,
      userId: this.activityModel.userId,
      dutyId: this.activityModel.dutyId,
      output: this.selectedOutput.label,
      title: this.activityModel.title,
      dates: this.selectedDates,
      details: this.selectedDetails
    };

    switch (this.selectedOutput.value) {
      case 1:
        this.activityInput.conferenceActivities = this.selectedConferenceActivities.map(
          (activity) => activity.label
        );
        break;

      case 2:
        this.activityInput.url = this.selectedUrl;
        break;

      case 3:
        this.activityInput.authors = this.selectedAuthors;
        break;

      case 4:
        this.activityInput.authors = this.selectedAuthors;
        break;

      case 5:
        this.activityInput.url = this.selectedUrl;
        break;

      default:
        break;
    }

    this.researchService
      .editResearchActivity(this.activityInput)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.isSubmitting = false;

          console.log(result);

          this.alertService.successToast('Research activity edited');
          this.router.navigate(['activity/research']);
        },
        (err) => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }
  onBack(event) {
    this.router.navigate(['activity/research']);
  }
  onReset(event) {
    this.getActivity();
    this.form.form.markAsPristine();
  }
}
