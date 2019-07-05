import { CustomRouteReuseStategy } from './../../../shared/helpers/routing-strategy';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { ModuleComponent } from './module.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleAddComponent } from './module-add/module-add.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleComponent,
        children: [
            {
                path: '',
                component: ModuleListComponent,
            },
            {
                path: 'view/:id',
                component: ModuleViewComponent,
            },
            {
                path: 'edit/:id',
                component: ModuleEditComponent,
            },
            {
                path: 'add',
                component: ModuleAddComponent,
            },
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
export class ModuleRoutingModule {}