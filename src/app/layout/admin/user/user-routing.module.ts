
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


import { UserComponent } from './user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
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
export class UserRoutingModule {}
