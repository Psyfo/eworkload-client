import { OnInit, Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router';
import {
    FormGroup,
    FormControl,
    Validators,
    FormsModule
} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    onSignup() {}
}
