import { map } from 'rxjs/operators';
import {
    AddBlockGQL,
    BlockGQL,
    BlockInput,
    BlocksGQL,
    DeleteBlockGQL,
    EditBlockGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlockService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private blockGql: BlockGQL,
        private blocksGql: BlocksGQL,
        private addBlockGql: AddBlockGQL,
        private editBlockGql: EditBlockGQL,
        private deleteBlockGql: DeleteBlockGQL
    ) {}

    blocks() {
        return this.blocksGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    block(blockId: string) {
        return this.blockGql
            .watch(
                { blockId: blockId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(map(result => result, err => err));
    }

    addBlock(block: BlockInput) {
        return this.addBlockGql
            .mutate({ block: block })
            .pipe(map(result => result, err => err));
    }
    editBlock(block: BlockInput) {
        return this.editBlockGql
            .mutate({ block: block })
            .pipe(map(result => result, err => err));
    }
    deleteBlock(block: BlockInput) {
        return this.deleteBlockGql
            .mutate({ block: block })
            .pipe(map(result => result, err => err));
    }
}
