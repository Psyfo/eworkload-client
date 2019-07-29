import { CustomRouteReuseStrategy } from 'src/app/shared/helpers';

import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: '', component: ListUserComponent },
            { path: 'add', component: AddUserComponent },
            { path: 'view/:id', component: ViewUserComponent },
            { path: 'edit/:id', component: EditUserComponent }
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
export class UserRoutingModule {}
