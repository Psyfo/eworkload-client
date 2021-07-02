import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { routerTransition } from 'src/app/router.animations';

import { Component, OnInit } from '@angular/core';

import { IBlock } from './block.interface';
import { BlockService } from './block.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  animations: [routerTransition()]
})
export class BlockComponent implements OnInit {
  breadcrumbs: MenuItem[];

  blockDialog: boolean;
  blocks: IBlock[];
  block: IBlock;
  selectedBlocks: IBlock[];
  submitted: boolean;
  statuses: any;

  unsubscribe = new Subject();
  timer;

  constructor(
    private blockService: BlockService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
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
    this.getBlocks();
    this.timer = setInterval(() => {
      this.getBlocks();
    }, 2000);
  }
  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    if (this.timer) {
      clearInterval(this.timer);
    }
    console.log('Block destroyed');
  }

  getBlocks() {
    this.blockService.all().subscribe((data) => {
      this.blocks = data;
      console.log(JSON.stringify(this.blocks));
    });
  }

  openNew() {
    this.block = {};
    this.submitted = false;
    this.blockDialog = true;
  }

  deleteSelectedBlocks() {
    this.confirmationService.confirm({
      message: 'Are your sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.blocks = this.blocks.filter(
          (val) => !this.selectedBlocks.includes(val)
        );
        this.selectedBlocks = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Blocks deleted',
          life: 3000
        });
      }
    });
  }

  editBlock(block: IBlock) {
    this.block = { ...block };
    this.blockDialog = true;
  }

  deleteBlock(block: IBlock) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + block.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.blockService.delete(block._id).subscribe((data) => {
          this.blocks = [...this.blocks];
        });

        this.block = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Block Deleted',
          life: 3000
        });
      }
    });
  }

  hideDialog() {
    this.blockDialog = false;
    this.submitted = false;
  }

  saveBlock() {
    this.submitted = true;

    if (this.block.name.trim()) {
      if (this.block._id) {
        this.blockService
          .update(this.block)
          .subscribe((data) => (this.block = data));
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'block Updated',
          life: 3000
        });
      } else {
        this.blockService.create(this.block).subscribe();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'block Created',
          life: 3000
        });
      }

      //this.blocks = [...this.blocks];
      this.blockDialog = false;
      this.block = {};
    }
  }

  findIndexById(_id: string): number {
    let index = -1;
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i]._id === _id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
