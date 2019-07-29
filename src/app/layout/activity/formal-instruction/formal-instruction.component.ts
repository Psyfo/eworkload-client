import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-formal-instruction',
    templateUrl: './formal-instruction.component.html',
    styleUrls: ['./formal-instruction.component.scss'],
    animations: [routerTransition()]
})
export class FormalInstructionComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}
}
