import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-lecturer-manage-delete',
  templateUrl: './lecturer-manage-delete.component.html',
  styleUrls: ['./lecturer-manage-delete.component.scss'],
  animations: [routerTransition()]
})
export class LecturerManageDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
