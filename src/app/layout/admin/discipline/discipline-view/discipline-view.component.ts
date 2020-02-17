import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Discipline } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DisciplineService } from '../discipline.service';

@Component({
  selector: 'app-discipline-view',
  templateUrl: './discipline-view.component.html',
  styleUrls: ['./discipline-view.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineViewComponent implements OnInit {
  breadcrumbs: MenuItem[];

  discipline: Discipline;

  private unsubscribe = new Subject();

  constructor(
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private disciplineService: DisciplineService
  ) {}

  ngOnInit() {
    this.getDiscipline();
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getDiscipline() {
    this.activatedRoute.queryParamMap.pipe(takeUntil(this.unsubscribe)).subscribe(
      result => {
        const disciplineId = result.get('disciplineId');
        this.disciplineService
          .discipline(disciplineId)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe(result => {
            this.discipline = result.data.discipline;
          });
      },
      err => {
        console.error(err);
      }
    );
  }
  onEdit(event) {
    this.router.navigate(['admin/discipline/edit', this.discipline.disciplineId], {
      queryParams: {
        disciplineId: this.discipline.disciplineId
      }
    });
  }
  onBack(event): void {
    this.router.navigate(['../admin/discipline']);
  }
}
