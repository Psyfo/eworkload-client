import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first, timeout } from 'rxjs/operators';
import { FlashMessagesService } from 'angular2-flash-messages';
import { environment } from '../../environments/environment';

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
        private flashMessagesService: FlashMessagesService,
    ) {

    }


    ngOnInit() {
        this.loginForm = new FormGroup({
            'userId': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required])
        });
    }

    private onLoggedIn(): void {
        const authData = {
            isLoggedIn: true,
            userId: this.loginForm.controls['userId'].value
        }
        // dummy login
        localStorage.setItem('authData', JSON.stringify(authData));
        this.router.navigate(['dashboard']);
    }
}
