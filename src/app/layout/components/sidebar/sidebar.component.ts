import { MenuItem } from 'primeng/api/menuitem';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items: MenuItem[];
  displaySidebar: boolean = true;

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.displaySidebar = true;
    this.items = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Profile',
            icon: PrimeIcons.USER,
            routerLink: '/profile'
          },
          {
            label: 'Evidence',
            icon: PrimeIcons.QUESTION,
            routerLink: '/evidence'
          }
        ]
      },
      {
        label: 'Teaching Activities',
        items: [
          {
            label: 'Formal Instruction',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/formal-instruction'
          },
          {
            label: 'Supervision',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/supervision'
          }
        ]
      },
      {
        label: 'Research Activities',
        items: [
          {
            label: 'Research',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/research'
          }
        ]
      },
      {
        label: 'Service Activities',
        items: [
          {
            label: 'Academic Administration',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/academic-administration'
          },
          {
            label: 'Community Instruction',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/community-instruction'
          },
          {
            label: 'Executive Management',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/executive-management'
          },
          {
            label: 'Personnel Development',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/personnel-development'
          },
          {
            label: 'Public Service',
            icon: PrimeIcons.PLUS,
            routerLink: '/activity/public-service'
          }
        ]
      },
      {
        label: 'Reports',
        items: [
          //   {
          //     label: 'HEMIS',
          //     icon: PrimeIcons.FILE,
          //     routerLink: '/report/hemis-historical'
          //   },
          {
            label: 'HOD SUMMARY',
            icon: PrimeIcons.FILE,
            routerLink: '/report'
          }
        ]
      },
      {
        label: 'Admin',
        items: [
          {
            label: 'Blocks',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/block'
          },
          {
            label: 'Departments',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/department'
          },
          {
            label: 'Disciplines',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/discipline'
          },
          {
            label: 'Duties',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/duty'
          },
          {
            label: 'Faculties',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/faculty'
          },
          {
            label: 'Groups',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/group'
          },
          {
            label: 'Module',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/module'
          },
          {
            label: 'Offering Types',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/offering-type'
          },
          {
            label: 'Positions',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/position'
          },
          {
            label: 'Qualification',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/qualification'
          },
          {
            label: 'Students',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/student'
          },
          {
            label: 'Users',
            icon: PrimeIcons.PLUS,
            routerLink: '/admin/user'
          }
        ]
      }
    ];
  }

  toProfile() {
    this.router.navigate['profile'];
  }
}
