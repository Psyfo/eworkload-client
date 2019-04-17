import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';
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

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss'],
    animations: [routerTransition()]
})
export class AddComponent implements OnInit {
    userId: string;
    user: User;
    loading: boolean;
    errors: any;

    outputTypes = ['Conference Proceedings', 'Keynote Address', 'Journal', 'Books', 'Chapter'];

    supervisionDetails: {
        researchRole: string;
        studentId: string;
    } = { researchRole: '', studentId: '' };

    researchActivityForm: FormGroup;

    constructor(
        private alertService: AlertService,
        private router: Router,
        private fb: FormBuilder,
        private userGql: UserGQL,
        private userService: UserService
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
            this.userGql
                .watch({ userId: this.userId })
                .valueChanges.subscribe(result => {
                    this.user = result.data.user as User;
                    this.loading = result.loading;
                    this.errors = result.errors;

                    console.log(this.user);
                });
        });
    }

    onAdd() {
        if (this.researchActivityForm.invalid) {
            this.alertService.sendMessage('Validation failed!', 'warning');
        }

    }

    onBack() {
        this.router.navigate(['activity/research']);
    }


}
