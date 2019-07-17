import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { UserGQL, User } from '../../../shared/generated/output';
import { UserService } from '../../../shared/services/user.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';
    userId: string;
    user: User;
    loading: boolean;
    errors: any;

    private unsubscribe = new Subject();

    constructor(
        private translate: TranslateService,
        public router: Router,
        private flashMessagesService: FlashMessagesService,
        private userGql: UserGQL,
        private userService: UserService
    ) {
        this.translate.addLangs([
            'en',
            'fr',
            'ur',
            'es',
            'it',
            'fa',
            'de',
            'zh-CHS'
        ]);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(
            browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/)
                ? browserLang
                : 'en'
        );

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        // Get current user ID
        this.userService
            .currentUserId()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(userId => {
                this.userId = userId;
                console.log(`Current user id: ${this.userId}`);

                // Fetch user data
                this.userGql
                    .watch({ userId: this.userId })
                    .valueChanges.subscribe(result => {
                        this.user = result.data.user as User;
                        this.loading = result.loading;
                        this.errors = result.errors;
                    });
            });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('authData');
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
