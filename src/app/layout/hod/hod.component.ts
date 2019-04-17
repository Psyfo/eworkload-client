import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.scss'],
  animations: [routerTransition()]
})
export class HodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
