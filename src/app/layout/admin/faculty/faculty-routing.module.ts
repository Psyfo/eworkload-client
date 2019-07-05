import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyDeleteComponent } from './faculty-delete/faculty-delete.component';
import { FacultyAddComponent } from './faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculty-edit/faculty-edit.component';
import { FacultyViewComponent } from './faculty-view/faculty-view.component';
import { FacultyComponent } from './faculty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FacultyComponent,
        children: [
            { path: '', component: FacultyListComponent },
            { path: 'add', component: FacultyAddComponent },
            { path: 'view/:id', component: FacultyViewComponent },
            { path: 'edit/:id', component: FacultyEditComponent },
            { path: 'delete/:id', component: FacultyDeleteComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStategy },
    ],
})
export class FacultyRoutingModule {}
