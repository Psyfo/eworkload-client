import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first, timeout } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';
import { LoopBackConfig, LoopBackAuth, LecturerApi, Lecturer, AccessToken } from '../../../sdk';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../shared';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    private lecturer: Lecturer = new Lecturer();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private lecturerApi: LecturerApi,
        private flashMessagesService: FlashMessagesService,
        private authenticationService: AuthenticationService
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }


    ngOnInit() {
        this.loginForm = new FormGroup({
            'userId': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required])
        });
    }

    private onLoggedIn(): void {

        // Get form elements into lecturer object
        this.lecturer.username = this.loginForm.get('userId').value;
        this.lecturer.password = this.loginForm.get('password').value;

        // Use api to login
        this.lecturerApi.login(this.lecturer).subscribe(
            (auth) => {
                console.log('Login function works!');
                console.log(auth.userId);
                console.log(auth.id);
                this.flashMessagesService.show('Login Successful!', { cssClass: 'alert-success' });
                this.router.navigate(['/']);


            },
            (error) => {
                // if error show in console and do nothing
                console.log(error);
                this.flashMessagesService.show(error.statusCode, { cssClass: 'alert-danger' });
                this.flashMessagesService.show(error.message, { cssClass: 'alert-danger' });
                return;
            }
        );
    }
}
