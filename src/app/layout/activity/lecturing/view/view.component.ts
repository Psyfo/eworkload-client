import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../../router.animations";
import { Router } from "@angular/router";
import { AlertService } from "../../../../shared/services";

@Component({
    selector: "app-view",
    templateUrl: "./view.component.html",
    styleUrls: ["./view.component.scss"],
    animations: [routerTransition()]
})
export class ViewComponent implements OnInit {
    constructor(
        private router: Router,
        private alertService: AlertService
    ) {}

    ngOnInit() {}

    onAdd() {
        this.router.navigate['lecture/add'];
    }
}
