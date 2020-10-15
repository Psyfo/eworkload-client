import { MenuItem } from 'primeng/api/menuitem';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { routerTransition } from 'src/app/router.animations';
import { Block } from 'src/app/shared/generated';
import { AlertService } from 'src/app/shared/modules';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlockService } from '../block.service';

@Component({
  selector: 'app-view-block',
  templateUrl: './view-block.component.html',
  styleUrls: ['./view-block.component.scss'],
  animations: [routerTransition()]
})
export class ViewBlockComponent implements OnInit {
  breadcrumbs: MenuItem[] = [];

  block: Block;

  private unsubscribe = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private blockService: BlockService
  ) {}

  ngOnInit() {
    this.breadcrumbs = [
      {
        label: 'admin'
      },
      { label: 'block', url: 'admin/block' },
      { label: 'view' }
    ];
    this.activatedRoute.queryParamMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((params) => {
        const blockId = params.get('blockId');
        this.getBlock(blockId);
      });
  }

  getBlock(blockId: string) {
    this.blockService
      .block(blockId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (result) => {
          this.block = result.data.block;
          console.log(this.block);
        },
        (err) => {
          this.alertService.errorToast(err);
          console.warn(err);
        }
      );
  }

  onBack(event) {
    this.router.navigate(['admin/block']);
  }

  onEdit(event) {
    this.router.navigate(['admin/block/edit', this.block.blockId], {
      queryParams: { blockId: this.block.blockId }
    });
  }
}
