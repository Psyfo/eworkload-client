import { AlertService } from './../../../shared/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss'],
  animations: [routerTransition()]
})
export class FacultyComponent implements OnInit {

  constructor(
      private alertService: AlertService
  ) { }

  ngOnInit() {
  }

}
