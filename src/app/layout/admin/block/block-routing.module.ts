import { EditBlockComponent } from './edit-block/edit-block.component';
import { AddBlockComponent } from './add-block/add-block.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockComponent } from './block.component';
import { ViewBlockComponent } from './view-block/view-block.component';

const routes: Routes = [
    {
        path: '',
        component: BlockComponent,
        children: [
            { path: '', component: ListBlockComponent },
            { path: 'add', component: AddBlockComponent },
            { path: 'edit/:id', component: EditBlockComponent },
            { path: 'view/:id', component: ViewBlockComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlockRoutingModule {}
