import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    collapsed: boolean = false;
    showAdminMenu: string = '';
    showHodMenu: string = '';
    showActivityMenu: string = '';
    showTeachingMenu: string = '';
    showResearchMenu: string = '';
    showServiceMenu: string = '';
    showReportMenu: string = '';
    pushRightClass: string = 'push-right';

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(
            browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en'
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

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandAdmin(element: any) {
        if (element === this.showAdminMenu) {
            this.showAdminMenu = '0';
        } else {
            this.showAdminMenu = element;
        }
    }

    addExpandHoD(element: any) {
        if (element === this.showHodMenu) {
            this.showHodMenu = '0';
        } else {
            this.showHodMenu = element;
        }
    }

    addExpandActivity(element: any) {
        if (element === this.showActivityMenu) {
            this.showActivityMenu = '0';
        } else {
            this.showActivityMenu = element;
        }
    }

    addExpandTeaching(element: any) {
        if (element === this.showTeachingMenu) {
            this.showTeachingMenu = '0';
        } else {
            this.showTeachingMenu = element;
        }
    }

    addExpandResearch(element: any) {
        if (element === this.showResearchMenu) {
            this.showResearchMenu = '0';
        } else {
            this.showResearchMenu = element;
        }
    }

    addExpandService(element: any) {
        if (element === this.showServiceMenu) {
            this.showServiceMenu = '0';
        } else {
            this.showServiceMenu = element;
        }
    }

    addExpandReport(element: any) {
        if (element === this.showReportMenu) {
            this.showReportMenu = '0';
        } else {
            this.showReportMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
    }
}
