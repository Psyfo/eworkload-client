import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.scss'],
  animations: [routerTransition()]
})
export class DepartmentDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
