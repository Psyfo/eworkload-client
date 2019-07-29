import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddResearchComponent } from './add-research/add-research.component';
import { EditResearchComponent } from './edit-research/edit-research.component';
import { ListResearchComponent } from './list-research/list-research.component';
import { ResearchComponent } from './research.component';
import { ViewResearchComponent } from './view-research/view-research.component';

const routes: Routes = [
    {
        path: '',
        component: ResearchComponent,
        children: [
            { path: '', component: ListResearchComponent },
            { path: 'add', component: AddResearchComponent },
            { path: 'edit/:id', component: EditResearchComponent },
            { path: 'view/:id', component: ViewResearchComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResearchRoutingModule {}
