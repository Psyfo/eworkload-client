import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { AuthGuard } from 'src/app/shared/guard';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
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
      },
      {
        path: 'profile-picture',
        component: ProfilePictureComponent,
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
