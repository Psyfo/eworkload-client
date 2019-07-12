import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStrategy } from './../../../shared/helpers/routing-strategy';
import { DisciplineAddComponent } from './discipline-add/discipline-add.component';
import { DisciplineDeleteComponent } from './discipline-delete/discipline-delete.component';
import { DisciplineEditComponent } from './discipline-edit/discipline-edit.component';
import { DisciplineListComponent } from './discipline-list/discipline-list.component';
import { DisciplineViewComponent } from './discipline-view/discipline-view.component';
import { DisciplineComponent } from './discipline.component';

const routes: Routes = [
    {
        path: '',
        component: DisciplineComponent,
        children: [
            { path: '', component: DisciplineListComponent },
            { path: 'add', component: DisciplineAddComponent },
            { path: 'view/:id', component: DisciplineViewComponent },
            { path: 'edit/:id', component: DisciplineEditComponent },
            { path: 'delete/:id', component: DisciplineDeleteComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
    ]
})
export class DisciplineRoutingModule {}
