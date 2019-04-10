import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss'],
  animations: [routerTransition()]
})
export class VenueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
