import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService, ActivityService } from '../../../../shared/services';
import { Router } from '@angular/router';
import {
    FormGroup,
    FormBuilder,
    Validators,
    FormControl,
    FormArray
} from '@angular/forms';
import { User } from '../../../../shared/models';
import { UserGQL } from '../../../../shared/generated/output';
import { UserService } from '../../../../shared/services/user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
            this.alertService.sendMessage('Validation failed!', 'warning');
        }
    }

    onCancel() {
        this.router.navigate(['activity/research']);
    }
}
