import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { FormalInstructionActivity } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormalInstructionService } from '../formal-instruction.service';

@Component({
  selector: 'app-view-formal-instruction',
  templateUrl: './view-formal-instruction.component.html',
  styleUrls: ['./view-formal-instruction.component.scss'],
  animations: [routerTransition()]
})
export class ViewFormalInstructionComponent implements OnInit {
  breadcrumbs: MenuItem[] = [];
  activityId: string;
  activity: FormalInstructionActivity;

  private unsubscribe = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private formalInstructionService: FormalInstructionService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'activity'
      },
      { label: 'formal-instruction' },
      { label: 'view' }
    ];
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((params) => {
        this.activityId = params.get('activityId');
        this.getActivity(this.activityId);
      });
  }

  getActivity(activityId: string) {
    this.formalInstructionService
      .formalInstructionActivity(activityId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.activity = result.data.formalInstructionActivity;
        console.log(this.activity);
      });
  }

  onBack(event) {
    this.router.navigate(['activity/formal-instruction']);
  }

  onEdit(event) {
    this.router.navigate(
      ['activity/formal-instruction/edit', this.activity.activityId],
      {
        queryParams: { activityId: this.activity.activityId }
      }
    );
  }
}
