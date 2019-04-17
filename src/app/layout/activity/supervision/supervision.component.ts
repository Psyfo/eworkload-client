import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.scss'],
  animations: [routerTransition()]
})
export class SupervisionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
