import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStrategy } from '../../../shared/helpers/routing-strategy';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyViewComponent } from './faculty-view/faculty-view.component';
import { FacultyComponent } from './faculty.component';

const routes: Routes = [
    {
        path: '',
        component: FacultyComponent,
        children: [
            { path: '', component: FacultyListComponent },
            { path: 'add', component: FacultyAddComponent },
            { path: 'view/:id', component: FacultyViewComponent },
            { path: 'edit/:id', component: FacultyEditComponent }
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
export class FacultyRoutingModule {}
