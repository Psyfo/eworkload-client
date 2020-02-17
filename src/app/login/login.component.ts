import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { routerTransition } from '../router.animations';
import { AlertService } from '../shared/modules';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  @ViewChild('f', { static: false, read: NgForm }) form: NgForm;

  loginData: any = {};

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLoggedIn(): void {
    // Check null
    if (this.loginData.userId === undefined || this.loginData.userId === '') {
      this.alertService.warnToast('User ID cannot be empty');
      return;
    }
    if (
      this.loginData.password === undefined ||
      this.loginData.password === ''
    ) {
      this.alertService.warnToast('Password cannot be empty');
      return;
    }
    this.authService
      .login(this.loginData.userId, this.loginData.password)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          const authData = result.data.login;
          localStorage.setItem('authData', JSON.stringify(authData));
          setTimeout(() => {
            this.alertService.successToast('Logged in!');
          }, 1000);
          this.router.navigate(['profile']);
        },
        err => {
          console.log(err.message);
          this.alertService.warnToast(err.message);
        }
      );
  }
}
