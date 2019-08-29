import { MenuItem } from 'primeng/components/common/menuitem';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

import { AlertService } from '../../../../shared/modules/alert/alert.service';

@Component({
    selector: 'app-list-moderation',
    templateUrl: './list-moderation.component.html',
    styleUrls: ['./list-moderation.component.scss'],
    animations: [routerTransition()]
})
export class ListModerationComponent implements OnInit {
    breadcrumbs: MenuItem[];
    cols: any[];
    menuItems: MenuItem[];

    constructor(private alertService: AlertService) {}

    ngOnInit() {
        this.breadcrumbs = [{ label: 'activity' }, { label: 'moderation' }];
    }
}
