import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-lecturer-manage-view',
  templateUrl: './lecturer-manage-view.component.html',
  styleUrls: ['./lecturer-manage-view.component.scss'],
  animations: [routerTransition()]
})
export class LecturerManageViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
