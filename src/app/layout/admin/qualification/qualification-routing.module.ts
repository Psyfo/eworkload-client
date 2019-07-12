import { CustomRouteReuseStrategy } from './../../../shared/helpers/routing-strategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { QualificationComponent } from './qualification.component';
import { QualificationListComponent } from './qualification-list/qualification-list.component';
import { QualificationAddComponent } from './qualification-add/qualification-add.component';
import { QualificationViewComponent } from './qualification-view/qualification-view.component';
import { QualificationEditComponent } from './qualification-edit/qualification-edit.component';

const routes: Routes = [
    {
        path: '',
        component: QualificationComponent,
        children: [
            { path: '', component: QualificationListComponent },
            { path: 'add', component: QualificationAddComponent },
            { path: 'view/:id', component: QualificationViewComponent },
            { path: 'edit/:id', component: QualificationEditComponent }
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
export class QualificationRoutingModule {}
