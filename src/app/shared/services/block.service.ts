import { Injectable } from '@angular/core';
import { Block } from '../models';
import { ErrorService } from './error.service';
import { AlertService } from './alert.service';
import { BlockGQL, BlocksGQL } from '../generated/output';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BlockService {
    block: Block;
    blocks: Block[];

    loading: boolean;
    errors: any;

    constructor(
        private errorService: ErrorService,
        private alertService: AlertService,
        private blockGql: BlockGQL,
        private blocksGql: BlocksGQL
    ) {}

    getBlocks() {
        return this.blocksGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    getBlock(blockId: string) {
        return this.blockGql.watch({ blockId: blockId }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}
