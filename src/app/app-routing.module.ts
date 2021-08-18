import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { AuthGuard } from 'src/app/shared/guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: '/admin/user', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./signup/signup.module').then((m) => m.SignupModule)
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./server-error/server-error.module').then(
            (m) => m.ServerErrorModule
          )
      },
      {
        path: 'access-denied',
        loadChildren: () =>
          import('./access-denied/access-denied.module').then(
            (m) => m.AccessDeniedModule
          )
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./not-found/not-found.module').then((m) => m.NotFoundModule)
      },
      { path: '**', redirectTo: 'not-found' },
      {
        path: 'layout/evidence',
        loadChildren: () =>
          import('./layout/evidence/evidence.module').then(
            (m) => m.EvidenceModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
