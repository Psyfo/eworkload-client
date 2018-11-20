import { Component, OnInit } from '@angular/core';
import { Block } from '../../../../sdk/models';
import { BlockApi } from '../../../../sdk/services';
import { LoopBackConfig } from '../../../../sdk';

@Component({
    selector: 'app-block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
    blocks: Block[];
    block: Block;

    constructor(private blockApi: BlockApi) {
        LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
        LoopBackConfig.setApiVersion('api');
    }

    ngOnInit() {
        this.getBlocks();
        this.getBlock('11');
    }
    getBlocks() {
        this.blockApi.find()
            .subscribe((blocks: Block[]) => {
                this.blocks = blocks;
                console.log(this.blocks);
            });
        // return this.blockApi.find<Block>()
        //     .toPromise();
    }
    getBlock(blockId: string) {
        this.blockApi.findById(blockId)
            .subscribe((block: Block) => {
                this.block = block;
                console.log(this.block);
            });
    }

}
