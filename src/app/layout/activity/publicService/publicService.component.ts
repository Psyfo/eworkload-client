import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-publicService',
  templateUrl: './publicService.component.html',
  styleUrls: ['./publicService.component.scss'],
  animations: [routerTransition()]
})
export class PublicServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
