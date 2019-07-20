import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { User } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';
import { ActivityService, UserService } from 'src/app/shared/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    userId: string;
    user: User;

    outputTypes = this.activityService.outputTypes;

    private unsubscribe = new Subject();

    researchActivityForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private userService: UserService,
        private activityService: ActivityService
    ) {}

    ngOnInit() {
        // initialize form
        this.researchActivityForm = this.fb.group({
            outputType: ['', Validators.required],
            researchLocation: ['', Validators.required]
        });

        this.initializeForm();
    }

    initializeForm() {
        // Get current user ID
        this.userService.currentUserId().subscribe(userId => {
            this.userId = userId;
            console.log(`Current user id: ${this.userId}`);

            // Fetch user data
            this.userService
                .currentUser()
                .pipe(takeUntil(this.unsubscribe))
                .subscribe(result => {
                    this.user = <User>(<unknown>result.data.user);
                });
        });
    }

    onAdd() {
        if (this.researchActivityForm.invalid) {
            this.alertService.success('Validation failed!');
        }
    }

    onCancel() {
        this.router.navigate(['activity/research']);
    }
}
