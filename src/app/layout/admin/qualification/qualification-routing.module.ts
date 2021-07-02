import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QualificationComponent } from './qualification.component';

const routes: Routes = [
    {
        path: '',
        component: QualificationComponent,
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
export class QualificationRoutingModule {}
