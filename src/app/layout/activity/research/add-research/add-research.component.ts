import { SelectItem } from 'primeng/components/common/selectitem';
import { UserService } from './../../../admin/user/user.service';
import { Subject } from 'rxjs';
import { ResearchActivityInput } from './../../../../shared/generated/output';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { ResearchService } from './../research.service';
import { AlertService } from 'src/app/shared/modules';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-add-research',
    templateUrl: './add-research.component.html',
    styleUrls: ['./add-research.component.scss'],
    animations: [routerTransition()]
})
export class AddResearchComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    dutyId = '20';
    outputs = this.researchService.outputTypes;
    selectedOutput: any = null;
    selectedTitle: string = '';
    selectedDates: Date[];
    conferenceActivities = this.researchService.conferenceActivities;
    selectedConferenceActivities: SelectItem[] = [];
    activityInput: ResearchActivityInput = {};
    selectedAuthors: string[] = [];
    selectedUrl = '';
    selectedDetails = '';
    isSubmitting: boolean;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private researchService: ResearchService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'research' },
            { label: 'add' }
        ];
        console.log(this.conferenceActivities);
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    onFileSelected(event) {}

    onSubmit() {
        this.isSubmitting = true;

        this.activityInput = {
            userId: this.userId,
            dutyId: this.dutyId,
            output: this.selectedOutput.label,
            title: this.selectedTitle,
            dates: this.selectedDates,
            details: this.selectedDetails
        };

        switch (this.selectedOutput.value) {
            case 1:
                this.activityInput.conferenceActivities = this.selectedConferenceActivities.map(
                    activity => activity.label
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
            .addResearchActivity(this.activityInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.isSubmitting = false;

                    console.log(result);

                    this.alertService.successToast(
                        'Research activity captured'
                    );
                    this.router.navigate(['activity/research']);
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['activity/research']);
    }
    onReset(event) {
        this.form.reset();
        this.ngOnInit();
    }
}
