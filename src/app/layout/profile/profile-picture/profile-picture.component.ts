import { routerTransition } from 'src/app/router.animations';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/modules';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../admin/user/user.service';
import { UploadService } from 'src/app/shared/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-profile-picture',
    templateUrl: './profile-picture.component.html',
    styleUrls: ['./profile-picture.component.scss'],
    animations: [routerTransition()]
})
export class ProfilePictureComponent implements OnInit {
    breadcrumbs: MenuItem[];

    selectedFile: File[];
    isUploading: boolean = false;

    private unsubscribe = new Subject();
    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private uploadService: UploadService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'profile',
                url: 'profile/view'
            },
            {
                label: 'profile-picture',
                url: 'profile/profile-picture'
            }
        ];
    }

    onFileSelected(event, imageUpload) {
        this.selectedFile = event.files[0];
        console.log(this.selectedFile);

        this.onFileUpload(
            this.selectedFile,
            imageUpload,
            this.userService.currentUserIdStatic()
        );
    }
    onFileUpload(file, imageUpload, userId) {
        // Start progress
        this.isUploading = true; // start spinner

        // Upload image with 2sec initial delay
        setTimeout(() => {
            this.uploadService
                .uploadProfilePicture(file, userId)
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(
                    result => {
                        console.log(result.data.uploadProfilePicture);

                        this.alertService.successToast('Image upload success');
                        this.isUploading = false; // stop spinner
                        imageUpload.clear(); // clear files
                        this.router.navigate(['profile']);
                    },
                    err => {
                        console.error(err);
                    }
                );
        }, 2000);
    }
}
