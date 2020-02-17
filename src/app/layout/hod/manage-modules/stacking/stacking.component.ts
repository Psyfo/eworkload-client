import { routerTransition } from 'src/app/router.animations';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-stacking",
    templateUrl: "./stacking.component.html",
    styleUrls: ["./stacking.component.scss"],
    animations: [routerTransition()]
})
export class StackingComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
