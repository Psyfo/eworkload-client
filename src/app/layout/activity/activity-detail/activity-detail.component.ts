import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
  animations: [routerTransition()]
})
export class ActivityDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
