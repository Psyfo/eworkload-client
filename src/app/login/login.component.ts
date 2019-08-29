import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../router.animations';
import { AlertService } from '../shared/modules';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            userId: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }

    onLoggedIn(): void {
        const authData = {
            isLoggedIn: true,
            userId: this.loginForm.controls['userId'].value
        };
        // dummy login
        localStorage.setItem('authData', JSON.stringify(authData));
        this.alertService.success('Redirecting to Profile');
        this.router.navigate(['profile']);
    }
}
