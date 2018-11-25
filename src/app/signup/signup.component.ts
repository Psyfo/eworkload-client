import { OnInit, Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../shared/models';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    user = new User();
    signupForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private router: Router,
        private flashMessagesService: FlashMessagesService) { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            'userId': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required]),
            'firstName': new FormControl(null, [Validators.required]),
            'lastName': new FormControl(null, [Validators.required])
        });

        this.flashMessagesService.grayOut(true);
    }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSignup() {
        this.submitted = true;


        // stop here if form is invalid
        if (this.signupForm.invalid) {
            this.flashMessagesService.show('Registration incomplete!', { cssClass: 'alert-danger', timeout: 2500 });
            return;
        }
        console.log(this.signupForm);

        this.user.userId = this.signupForm.get('userId').value;
        this.user.password = this.signupForm.get('password').value;
        this.user.firstName = this.signupForm.get('firstName').value;
        this.user.lastName = this.signupForm.get('lastName').value;
        console.log('This is what is being sent: ');
        console.log(this.user);

        this.loading = true;

    }
}
