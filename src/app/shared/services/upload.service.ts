import { UploadlProfilePictureGQL, File } from './../generated/output';
import { AlertService } from 'src/app/shared/modules';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UploadService {
    constructor(
        private alertService: AlertService,
        private uploadProfilePictureGql: UploadlProfilePictureGQL
    ) {}

    uploadProfilePicture(file: File, userId: string) {
        return this.uploadProfilePictureGql
            .mutate({ file: file, userId: userId })
            .pipe(
                map(result => {
                    return result;
                })
            );
    }
}
