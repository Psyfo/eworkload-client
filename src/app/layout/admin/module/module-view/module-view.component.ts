import {
    Component,
    OnInit,
    ChangeDetectorRef,
    SimpleChanges,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { routerTransition } from '../../../../router.animations';
import { Module } from '../../../../shared/models';
import { ModuleService } from '../../../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-module-view',
    templateUrl: './module-view.component.html',
    styleUrls: ['./module-view.component.scss'],
    animations: [routerTransition()],
})
export class ModuleViewComponent implements OnInit {
    module: any;

    editModuleForm: FormGroup;

    private unsubscribe = new Subject();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private moduleService: ModuleService
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(result => {
                this.getModule(
                    result.moduleId,
                    result.blockId,
                    result.offeringTypeId,
                    result.qualificationId
                );
            });
    }
    ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getModule(
        moduleId: string,
        blockId: string,
        offeringTypeId: string,
        qualificationId: string
    ) {
        this.moduleService
            .getModule(moduleId, blockId, offeringTypeId, qualificationId)
            .subscribe(result => {
                this.module = <Module>(<unknown>result.data.module);
            });
    }

    onEdit() {
        this.router.navigate(['admin/module/edit', this.module.moduleId], {
            queryParams: {
                moduleId: this.module.moduleId,
                blockId: this.module.block.blockId,
                offeringTypeId: this.module.offeringType.offeringTypeId,
            },
        });
    }

    onCancel() {
        this.router.navigate(['../admin/module']);
    }
}