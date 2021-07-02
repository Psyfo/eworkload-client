import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { ModuleComponent } from './module.component';

const routes: Routes = [
    {
        path: '',
        component: ModuleComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        
    ]
})
export class ModuleRoutingModule {}
