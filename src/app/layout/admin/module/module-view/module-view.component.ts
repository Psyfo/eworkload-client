import { MenuItem } from 'primeng/components/common/menuitem';
import { AlertService } from './../../../../shared/modules/alert/alert.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Module } from 'src/app/shared/generated';

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from '../module.service';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss'],
  animations: [routerTransition()]
})
export class ModuleViewComponent implements OnInit {
  breadcrumbs: MenuItem[];
  module: Module;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private moduleService: ModuleService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'module' },
      { label: 'view' }
    ];
    this.getModule();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getModule() {
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        result => {
          const id = result.get('id');

          this.moduleService
            .module(id)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
              result => {
                this.module = result.data.module;
                this.alertService.successToast(
                  `Loaded module ${this.module.id}`
                );
              },
              err => {
                console.error(err);
              }
            );
        },
        err => {
          console.error(err);
        }
      );
  }

  onEdit(event) {
    this.router.navigate(['admin/module/edit', this.module.id], {
      queryParams: {
        id: this.module.id
      }
    });
  }

  onBack(event) {
    this.router.navigate(['admin/module']);
  }
}
