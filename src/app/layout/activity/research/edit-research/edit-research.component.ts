import { ResearchActivity } from './../../../../shared/generated/output';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { ResearchActivityInput } from 'src/app/shared/generated';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AlertService } from 'src/app/shared/modules';
import { Router, ActivatedRoute } from '@angular/router';
import { ResearchService } from '../research.service';
import { UserService } from 'src/app/layout/admin/user/user.service';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-edit-research',
    templateUrl: './edit-research.component.html',
    styleUrls: ['./edit-research.component.scss']
})
export class EditResearchComponent implements OnInit {
    breadcrumbs: MenuItem[];
    outputs = this.researchService.outputTypes;
    conferenceDetails = this.researchService.conferenceDetails;
    researchActivity: ResearchActivityInput = {};
    editResearchForm: FormGroup;
    fullWidth = '100%';
    activity: ResearchActivity;
    editedActivity: ResearchActivityInput;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private fb: FormBuilder,
        private researchService: ResearchService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'research' },
            { label: 'edit' }
        ];
        this.activatedRoute.queryParams.subscribe(result => {
            this.getActivity(result.activityId);
        });
        this.buildForm();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Edit 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.editResearchForm = this.fb.group({
            output: ['', [Validators.required]],
            title: ['', [Validators.required]],
            details: ['', [Validators.required]],
            selectedConferenceDetails: [''],
            dates: ['', [Validators.required]],
            url: [''],
            evidence: ['']
        });
    }
    get output() {
        return this.editResearchForm.get('output');
    }
    get title() {
        return this.editResearchForm.get('title');
    }
    get details() {
        return this.editResearchForm.get('details');
    }
    get dates() {
        return this.editResearchForm.get('dates');
    }
    get url() {
        return this.editResearchForm.get('url');
    }
    get selectedConferenceDetails() {
        return this.editResearchForm.get('selectedConferenceDetails');
    }
    get evidence() {
        return this.editResearchForm.get('evidence');
    }
    getActivity(activityId: string) {
        this.researchService
            .researchActivity(activityId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.activity = result.data.researchActivity;
            });
    }
    onFileSelected(event) {}
    onEdit() {
        this.researchActivity.userId = this.userService.currentUserIdStatic();
        this.researchActivity.dutyId = '20';

        const selectedOutput = this.output.value;
        this.researchActivity.output = selectedOutput.value;
        this.researchActivity.title = this.title.value;
        this.researchActivity.details = this.details.value;
        this.researchActivity.url = this.url.value;
        this.researchActivity.dates = this.dates.value;
        console.log(this.researchActivity);

        this.researchService
            .editResearchActivity(this.researchActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
        this.alertService.successToast('Activity edited');
        this.router.navigate(['activity/research']);
    }
    onBack(event) {
        this.router.navigate(['activity/research']);
    }
    onReset(event) {
        this.editResearchForm.reset();
        this.ngOnInit();
    }
}
