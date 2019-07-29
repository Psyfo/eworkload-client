import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddModerationComponent } from './add-moderation/add-moderation.component';
import { EditModerationComponent } from './edit-moderation/edit-moderation.component';
import { ListModerationComponent } from './list-moderation/list-moderation.component';
import { ModerationComponent } from './moderation.component';
import { ViewModerationComponent } from './view-moderation/view-moderation.component';

const routes: Routes = [
    {
        path: '',
        component: ModerationComponent,
        children: [
            { path: '', component: ListModerationComponent },
            { path: 'add', component: AddModerationComponent },
            { path: 'view/:id', component: ViewModerationComponent },
            { path: 'edit/:id', component: EditModerationComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModerationRoutingModule {}
