import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-commInstruction',
  templateUrl: './commInstruction.component.html',
  styleUrls: ['./commInstruction.component.scss'],
  animations: [routerTransition()]
})
export class CommInstructionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
