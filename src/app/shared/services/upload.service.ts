import { map } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/modules';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';
import {
    File,
    UploadAcademicAdministrationEvidenceAwsGQL,
    UploadlProfilePictureGQL,
    UploadResearchEvidenceAwsGQL
} from '../generated/output';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    constructor(
        private alertService: AlertService,
        private uploadProfilePictureGql: UploadlProfilePictureGQL,
        private uploadAcademicAdministrationEvidenceGql: UploadAcademicAdministrationEvidenceAwsGQL,
        private uploadResearchEvidenceGql: UploadResearchEvidenceAwsGQL
    ) {}

    uploadProfilePicture(file: File[], userId: string) {
        return this.uploadProfilePictureGql
            .mutate({ file: file, userId: userId })
            .pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        this.alertService.errorToast(err);
                        console.warn(err);
                    }
                )
            );
    }

    uploadAcademicAdministrationEvidence(
        file: File,
        userId: string,
        activityId: string
    ) {
        return this.uploadAcademicAdministrationEvidenceGql
            .mutate({ file: file, userId: userId, activityId: activityId })
            .pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        this.alertService.errorToast(err);
                        console.warn(err);
                    }
                )
            );
    }
    uploadResearchEvidence(file: File, userId: string, activityId: string) {
        return this.uploadResearchEvidenceGql
            .mutate({ file: file, userId: userId, activityId: activityId })
            .pipe(
                map(
                    result => {
                        return result;
                    },
                    err => {
                        this.alertService.errorToast(err);
                        console.warn(err);
                    }
                )
            );
    }
}
