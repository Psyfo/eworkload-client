import { Injectable } from '@angular/core';
import { Block, BlockInput } from '../models';
import { AlertService } from './alert.service';
import {
    BlockGQL,
    BlocksGQL,
    AddBlockGQL,
    EditBlockGQL,
    DeleteBlockGQL
} from '../generated/output';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BlockService {
    block: Block;
    blocks: Block[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private blockGql: BlockGQL,
        private blocksGql: BlocksGQL,
        private addBlockGql: AddBlockGQL,
        private editBlockGql: EditBlockGQL,
        private deleteBlockGql: DeleteBlockGQL
    ) {}

    getBlocks() {
        return this.blocksGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getBlock(blockId: string) {
        return this.blockGql
            .watch(
                { blockId: blockId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    addBlock(block: BlockInput) {
        return this.addBlockGql.mutate({ block: block }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
    editBlock(block: BlockInput) {
        return this.editBlockGql.mutate({ block: block }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
    deleteBlock(block: BlockInput) {
        return this.deleteBlockGql.mutate({ block: block }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
