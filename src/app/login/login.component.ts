import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService, AlertService } from '../shared';
import { first } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private flashMessagesService: FlashMessagesService
    ) { }


    ngOnInit() {
        this.loginForm = new FormGroup({
            'userId': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required])
        });

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.flashMessagesService.show('Login not valid', {cssClass: 'alert-danger'});
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.loginForm.get('userId').value, this.loginForm.get('password').value)
            .pipe(first())
            .subscribe(
                data => {
                    // this.router.navigate([this.returnUrl]);
                    this.router.navigate(['/']);
                },
                error => {
                    // this.alertService.error(error);
                    this.flashMessagesService.show(error, {cssClass: 'alert-danger'});
                    this.loading = false;
                });
    }
}
