import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-faculty-delete',
  templateUrl: './faculty-delete.component.html',
  styleUrls: ['./faculty-delete.component.scss'],
  animations: [routerTransition()]
})
export class FacultyDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
