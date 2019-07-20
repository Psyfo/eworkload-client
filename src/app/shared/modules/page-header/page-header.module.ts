import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { PageHeaderComponent } from './page-header.component';

@NgModule({
    imports: [CommonModule, RouterModule, BreadcrumbModule],
    declarations: [PageHeaderComponent],
    exports: [PageHeaderComponent]
})
export class PageHeaderModule {}
