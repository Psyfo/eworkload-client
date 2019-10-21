import { Subject } from 'rxjs';
import { BlockService } from './../block.service';
import { Router } from '@angular/router';
import { AlertService } from './../../../../shared/modules/alert/alert.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { BlockInput } from 'src/app/shared/generated';

@Component({
    selector: 'app-add-block',
    templateUrl: './add-block.component.html',
    styleUrls: ['./add-block.component.scss'],
    animations: [routerTransition()]
})
export class AddBlockComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f', { static: false }) form: any;

    blockInput: BlockInput = {};

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private blockService: BlockService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'block' },
            { label: 'add' }
        ];
    }

    onSubmit() {}
    onBack(event) {
        this.router.navigate(['admin/block']);
    }
    onReset(event) {
        this.form.reset();
    }
}
