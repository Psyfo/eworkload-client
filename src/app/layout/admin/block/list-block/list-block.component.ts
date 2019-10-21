import { BlockInput } from './../../../../shared/generated/output';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Block } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockService } from '../block.service';

@Component({
    selector: 'app-list-block',
    templateUrl: './list-block.component.html',
    styleUrls: ['./list-block.component.scss'],
    animations: [routerTransition()]
})
export class ListBlockComponent implements OnInit {
    breadcrumbs: MenuItem[];
    menuItems: MenuItem[];
    cols: any[];

    blocks: Block[];
    selectedBlock: Block;
    loading: boolean;

    unsubscribe = new Subject();

    constructor(
        private alertService: AlertService,
        private router: Router,
        private blockService: BlockService
    ) {}

    ngOnInit() {
        this.breadcrumbs = [
            {
                label: 'admin'
            },
            {
                label: 'block',
                url: 'admin/block'
            }
        ];
        this.menuItems = [
            {
                label: 'View',
                icon: 'pi pi-search',
                command: event => this.onContextView(event)
            },
            {
                label: 'Edit',
                icon: 'pi pi-pencil',
                command: event => this.onContextEdit(event)
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: event => this.onContextDelete(event)
            }
        ];
        this.cols = [
            { field: 'blockId', header: 'Block ID' },
            { field: 'name', header: 'Name' },
            { field: 'description', header: 'Description' }
        ];

        this.getBlocks();
    }
    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    getBlocks() {
        this.blockService
            .blocks()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    this.loading = result.loading;
                    this.blocks = result.data.blocks;
                },
                err => {
                    this.alertService.errorToast(err);
                    console.warn(err);
                }
            );
    }
    onAdd() {
        this.router.navigate(['admin/block/add']);
    }

    onRowSelect(event) {
        this.alertService.infoToast(
            `Block: ${this.selectedBlock.blockId} selected`
        );
        this.router.navigate(['admin/block/view', this.selectedBlock.blockId], {
            queryParams: {
                blockId: this.selectedBlock.blockId
            }
        });
    }
    onContextView(event) {
        this.alertService.infoToast(
            `Block: ${this.selectedBlock.blockId} selected`
        );
        this.router.navigate(['admin/block/view', this.selectedBlock.blockId], {
            queryParams: {
                blockId: this.selectedBlock.blockId
            }
        });
    }
    onContextEdit(event) {
        this.alertService.infoToast(
            `Block: ${this.selectedBlock.blockId} selected`
        );
        this.router.navigate(['admin/block/edit', this.selectedBlock.blockId], {
            queryParams: {
                blockId: this.selectedBlock.blockId
            }
        });
    }
    onContextDelete(event) {
        this.alertService.confirm('blockDelete');
    }
    onReject() {
        this.alertService.clear();
    }
    onConfirm() {
        this.alertService.clear();
        const blockInput: BlockInput = {
            blockId: this.selectedBlock.blockId,
            name: this.selectedBlock.name,
            description: this.selectedBlock.description
        };
        this.blockService
            .deleteBlock(blockInput)
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(
                result => {
                    console.log(result.data.deleteBlock);

                    this.alertService.successToast('Block Deleted');
                },
                err => {
                    this.alertService.errorToast(err, 'errorToast');
                }
            );
    }
}
