import { Subject } from 'rxjs';
import { ModuleService } from './../module.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/modules';
import { MenuItem } from 'primeng/api/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-stack',
  templateUrl: './module-stack.component.html',
  styleUrls: ['./module-stack.component.scss']
})
export class ModuleStackComponent implements OnInit {
  breadcrumbs: MenuItem[];

  isSubmitting: boolean;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private moduleService: ModuleService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      { label: 'admin' },
      { label: 'module' },
      { label: 'stack', url: 'admin/module/stack' }
    ];
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onStack(event) {
    this.isSubmitting = true;
  }

  onBack(event) {
    this.router.navigate(['profile']);
  }
}
