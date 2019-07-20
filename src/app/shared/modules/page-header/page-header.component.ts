import { MenuItem } from 'primeng/components/common/menuitem';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from 'src/app/router.animations';

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

    constructor() {}

    ngOnInit() {
        this.home = { icon: 'pi pi-home', url: '/' };
    }
}
