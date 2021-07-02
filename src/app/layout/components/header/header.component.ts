import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../../admin/user/user.service';
import { IUser } from '../../admin/user/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pushRightClass: string = 'push-right';
  userId: string;
  user: IUser;
  loading: boolean;
  errors: any;

  private unsubscribe = new Subject();

  constructor(
    private translate: TranslateService,
    public router: Router,
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
      browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en'
    );

    this.router.events.subscribe((val) => {
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
    const authData = JSON.parse(localStorage.getItem('authData'));
    console.log(authData.userId);

    this.userService.byUserId(authData.userId).subscribe((data) => {
      this.user = data;
      JSON.stringify(data);
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
