import { MenuItem } from 'primeng/api/menuitem';
import { routerTransition } from 'src/app/router.animations';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-modules',
  templateUrl: './manage-modules.component.html',
  styleUrls: ['./manage-modules.component.scss'],
  animations: [routerTransition()]
})
export class ManageModulesComponent implements OnInit {
  breadcrumbs: MenuItem[];
  constructor(private alertService: AlertService, private router: Router) {}

  ngOnInit() {
    this.breadcrumbs = [{ label: 'hod' }, { label: 'manage-modules' }];
  }
}
