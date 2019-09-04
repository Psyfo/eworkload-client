import { MenuItem } from 'primeng/components/common/menuitem';
import { routerTransition } from 'src/app/router.animations';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService } from '../alert/alert.service';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    animations: [routerTransition()]
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() breadcrumbs: MenuItem[];
    home: MenuItem;

    constructor(private alertService: AlertService, private router: Router) {}

    ngOnInit() {
        this.home = { icon: 'pi pi-home', url: '/' };
    }
}
