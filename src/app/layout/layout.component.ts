import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../shared/models';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;
    user: User = JSON.parse(localStorage.getItem('currentUser'));

    constructor(
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit() {
        this.flashMessagesService.show(`Welcome ${this.user.firstName}`, {cssClass: 'alert-info'});
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
