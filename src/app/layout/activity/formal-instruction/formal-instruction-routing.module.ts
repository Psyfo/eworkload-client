import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddFormalInstructionComponent } from './add-formal-instruction/add-formal-instruction.component';
import { EditFormalInstructionComponent } from './edit-formal-instruction/edit-formal-instruction.component';
import { FormalInstructionComponent } from './formal-instruction.component';
import { ListFormalInstructionComponent } from './list-formal-instruction/list-formal-instruction.component';
import { ViewFormalInstructionComponent } from './view-formal-instruction/view-formal-instruction.component';

const routes: Routes = [
    {
        path: '',
        component: FormalInstructionComponent,
        children: [
            { path: '', component: ListFormalInstructionComponent },
            { path: 'add', component: AddFormalInstructionComponent },
            { path: 'view/:id', component: ViewFormalInstructionComponent },
            { path: 'edit/:id', component: EditFormalInstructionComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormalInstructionRoutingModule {}
