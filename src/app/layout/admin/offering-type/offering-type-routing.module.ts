import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OfferingTypeComponent } from './offering-type.component';

const routes: Routes = [
  {
    path: '',
    component: OfferingTypeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferingTypeRoutingModule {}
