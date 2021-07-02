import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


import { DisciplineComponent } from './discipline.component';

const routes: Routes = [
    {
        path: '',
        component: DisciplineComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        
    ]
})
export class DisciplineRoutingModule {}
