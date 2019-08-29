import { UserService } from './../../../admin/user/user.service';
import { Subject } from 'rxjs';
import { ResearchActivityInput } from './../../../../shared/generated/output';
import { routerTransition } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { ResearchService } from './../research.service';
import { AlertService } from 'src/app/shared/modules';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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
    outputs = this.researchService.outputTypes;
    conferenceDetails = this.researchService.conferenceDetails;
    researchActivity: ResearchActivityInput = {};
    addResearchForm: FormGroup;
    fullWidth = '100%';

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private researchService: ResearchService,
        private userService: UserService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'activity' },
            { label: 'research' },
            { label: 'add' }
        ];
        this.buildForm();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    buildForm() {
        this.addResearchForm = this.fb.group({
            output: ['', [Validators.required]],
            title: ['', [Validators.required]],
            details: ['', [Validators.required]],
            selectedConferenceDetails: [''],
            dates: ['', [Validators.required]],
            url: ['']
        });
    }
    get output() {
        return this.addResearchForm.get('output');
    }
    get title() {
        return this.addResearchForm.get('title');
    }
    get details() {
        return this.addResearchForm.get('details');
    }
    get dates() {
        return this.addResearchForm.get('dates');
    }
    get url() {
        return this.addResearchForm.get('url');
    }
    get selectedConferenceDetails() {
        return this.addResearchForm.get('selectedConferenceDetails');
    }
    get evidence() {
        return this.addResearchForm.get('evidence');
    }

    onFileSelected(event) {}
    onAdd() {
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
            .addResearchActivity(this.researchActivity)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {});
        this.alertService.successToast('Activity added');
        this.router.navigate(['activity/research']);
    }
    onBack(event) {
        this.router.navigate(['activity/research']);
    }
    onReset(event) {
        this.addResearchForm.reset();
        this.ngOnInit();
    }
}
