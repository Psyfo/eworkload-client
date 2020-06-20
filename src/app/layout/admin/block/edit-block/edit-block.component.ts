import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Block, BlockInput } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlockService } from '../block.service';

@Component({
    selector: 'app-edit-block',
    templateUrl: './edit-block.component.html',
    styleUrls: ['./edit-block.component.scss'],
    animations: [routerTransition()]
})
export class EditBlockComponent implements OnInit {
    breadcrumbs: MenuItem[];
    @ViewChild('f') form: any;

    blockModel: Block;

    private unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private blockService: BlockService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            { label: 'admin' },
            { label: 'block' },
            { label: 'edit' }
        ];
        this.getBlock();
    }

    getBlock() {
        this.activatedRoute.queryParamMap
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    const blockId = result.get('blockId');
                    this.blockService
                        .block(blockId)
                        .pipe(takeUntil(this.unsubscribe))
                        .subscribe(
                            result => {
                                this.blockModel = result.data.block;
                            },
                            err => {
                                this.alertService.errorToast(err);
                                console.warn(err);
                            }
                        );
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onSubmit() {
        const blockInput: BlockInput = {
            blockId: this.blockModel.blockId,
            name: this.blockModel.name,
            description: this.blockModel.description
        };

        this.blockService
            .editBlock(blockInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log(result.data.editBlock);

                    this.alertService.successToast('Block edited');
                    this.router.navigate(['admin/block']);
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onBack(event) {
        this.router.navigate(['admin/block']);
    }
    onReset(event) {
        this.form.reset();
        this.getBlock();
    }
}
