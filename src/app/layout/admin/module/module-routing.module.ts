import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CustomRouteReuseStrategy } from '../../../shared/helpers/routing-strategy';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleStackComponent } from './module-stack/module-stack.component';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleComponent } from './module.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleComponent,
        children: [
            {
                path: '',
                component: ModuleListComponent
            },
            {
                path: 'view/:id',
                component: ModuleViewComponent
            },
            {
                path: 'edit/:id',
                component: ModuleEditComponent
            },
            {
                path: 'add',
                component: ModuleAddComponent
            },
            {
                path: 'stack',
                component: ModuleStackComponent
            }
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
export class ModuleRoutingModule {}
