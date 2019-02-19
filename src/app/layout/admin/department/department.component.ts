import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: [routerTransition()]
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
