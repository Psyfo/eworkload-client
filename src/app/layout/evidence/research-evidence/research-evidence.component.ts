import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AlertService } from 'src/app/shared/modules';
import { Router } from '@angular/router';
import { ResearchService } from '../../activity/research/research.service';
import { Subject } from 'rxjs';
import { ResearchActivity, File } from 'src/app/shared/generated';
import { UserService } from '../../admin/user/user.service';
import { UploadService } from 'src/app/shared/services';

@Component({
    selector: 'app-research-evidence',
    templateUrl: './research-evidence.component.html',
    styleUrls: ['./research-evidence.component.scss'],
    animations: [routerTransition()]
})
export class ResearchEvidenceComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    userId = this.userService.currentUserIdStatic();
    currentUserId = this.userId;
    activities: ResearchActivity[] = [];
    selectedActivity: ResearchActivity;
    selectedFile: File;

    isUploading: boolean = false;

    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private researchService: ResearchService,
        private userService: UserService,
        private uploadService: UploadService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [{ label: 'evidence' }, { label: 'research' }];

        this.getResearchActivities();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete;
    }

    getResearchActivities() {
        this.researchService
            .researchActivitiesByUser(this.userId)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.activities = result.data.researchActivitiesByUser;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }

    onFileSelected(event) {
        this.selectedFile = event.files[0];
        console.log(this.selectedFile);

        this.onUpload(
            this.selectedFile,
            this.userId,
            this.selectedActivity.activityId
        );
    }
    onUpload(file: File, userId, activityId) {
        this.isUploading = true;

        setTimeout(() => {
            this.uploadService
                .uploadResearchEvidence(file, userId, activityId)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(result => {
                    this.isUploading = false;
                    this.alertService.successToast('Evidence uploaded');
                });
        }, 2000);
    }
}
