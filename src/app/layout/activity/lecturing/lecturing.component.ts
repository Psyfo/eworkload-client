import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lecturing',
    templateUrl: './lecturing.component.html',
    styleUrls: ['./lecturing.component.scss'],
    animations: [routerTransition()]
})
export class LecturingComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}
}
