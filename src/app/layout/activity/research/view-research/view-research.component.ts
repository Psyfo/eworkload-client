import { routerTransition } from 'src/app/router.animations';
import { Component, OnInit } from '@angular/core';
import { ResearchActivity } from 'src/app/shared/generated';
import { ResearchService } from '../research.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/modules';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-research',
  templateUrl: './view-research.component.html',
  styleUrls: ['./view-research.component.scss'],
  animations: [routerTransition()]
})
export class ViewResearchComponent implements OnInit {
  breadcrumbs: MenuItem[] = [];
  activityId: string;
  activity: ResearchActivity;

  private unsubscribe = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private researchService: ResearchService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'activity'
      },
      { label: 'research' },
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
    this.researchService
      .researchActivity(activityId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((result) => {
        this.activity = result.data.researchActivity;
        console.log(this.activity);
      });
  }

  onBack(event) {
    this.router.navigate(['activity/research']);
  }

  onEdit(event) {
    this.router.navigate(['activity/research/edit', this.activity.activityId], {
      queryParams: { activityId: this.activity.activityId }
    });
  }

  onEvidence(event) {}
}
