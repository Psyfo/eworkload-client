import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';
import { DutyInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DutyService } from '../duty.service';

@Component({
  selector: 'app-add-duty',
  templateUrl: './add-duty.component.html',
  styleUrls: ['./add-duty.component.scss'],
  animations: [routerTransition()]
})
export class AddDutyComponent implements OnInit {
  breadcrumbs: MenuItem[];
  @ViewChild('f') form: any;

  duty: DutyInput = {};

  unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private dutyService: DutyService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      {
        label: 'duty'
      },
      { label: 'add' }
    ];
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
  onAdd() {}
  onBack(event) {
    this.router.navigate(['admin/duty']);
  }
  onReset(event) {
    this.form.reset();
    this.ngOnInit();
  }
}
