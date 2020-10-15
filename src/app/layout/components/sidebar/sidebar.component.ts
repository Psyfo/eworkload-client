import { MenuItem } from 'primeng/api/menuitem';
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
  showEvidenceMenu: string = '';
  showTeachingMenu: string = '';
  showResearchMenu: string = '';
  showServiceMenu: string = '';
  showReportMenu: string = '';
  pushRightClass: string = 'push-right';

  isVisible: boolean = true;
  baseZIndex = 9000;
  items: MenuItem[];

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(
      browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en'
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

  ngOnInit(): void {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        url: 'profile'
      },
      {
        label: 'File',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              { label: 'User', icon: 'pi pi-fw pi-user-plus' },
              { label: 'Filter', icon: 'pi pi-fw pi-filter' }
            ]
          },
          { label: 'Open', icon: 'pi pi-fw pi-external-link' },
          { separator: true },
          { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-fw pi-question',
        items: [
          {
            label: 'Contents',
            icon: 'pi pi-pi pi-bars'
          },
          {
            label: 'Search',
            icon: 'pi pi-pi pi-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'User',
                icon: 'pi pi-fw pi-file'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              { label: 'Save', icon: 'pi pi-fw pi-save' },
              { label: 'Update', icon: 'pi pi-fw pi-save' }
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [{ label: 'Delete', icon: 'pi pi-fw pi-minus' }]
          }
        ]
      }
    ];
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

  addExpandEvidence(element: any) {
    if (element === this.showEvidenceMenu) {
      this.showEvidenceMenu = '0';
    } else {
      this.showEvidenceMenu = element;
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
