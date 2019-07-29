import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            {
                path: '',
                component: ProfileViewComponent,
                pathMatch: 'prefix'
            },
            {
                path: 'edit',
                component: ProfileEditComponent,
                pathMatch: 'prefix'
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent,
                pathMatch: 'prefix'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfileRoutingModule {}
