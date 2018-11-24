import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;
    constructor(
        private flashMessagesService: FlashMessagesService
    ) { }

    ngOnInit() {
        
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
