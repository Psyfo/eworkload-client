import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AlertService } from '../../../../shared/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discipline-edit',
  templateUrl: './discipline-edit.component.html',
  styleUrls: ['./discipline-edit.component.scss'],
  animations: [routerTransition()]
})
export class DisciplineEditComponent implements OnInit {
    disciplineId: string;

  constructor(
      private alertService: AlertService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.disciplineId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
