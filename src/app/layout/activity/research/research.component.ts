import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
  animations: [routerTransition()]
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
