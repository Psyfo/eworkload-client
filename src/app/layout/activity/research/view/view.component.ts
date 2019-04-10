import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  animations: [routerTransition()]
})
export class ViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
