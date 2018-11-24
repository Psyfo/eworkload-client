import { Component, OnInit, Renderer } from '@angular/core';
import { LoopBackConfig, LecturerApi, Lecturer, LoggerService, Position, PositionApi } from '../../../../../sdk';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';

import * as $ from 'jquery';
import { DataTablesResponse } from '../../../shared/helpers/DataTablesResponse';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-lecturer-manage',
    templateUrl: './lecturer-manage.component.html',
    styleUrls: ['./lecturer-manage.component.scss'],
    animations: [routerTransition()]
})
export class LecturerManageComponent implements OnInit {
    


    constructor(

    ) {

    }

    ngOnInit() {

    }



}
