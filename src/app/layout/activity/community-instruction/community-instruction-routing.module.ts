import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCommunityInstructionComponent } from './add-community-instruction/add-community-instruction.component';
import { CommunityInstructionComponent } from './community-instruction.component';
import { EditCommunityInstructionComponent } from './edit-community-instruction/edit-community-instruction.component';
import { ListCommunityInstructionComponent } from './list-community-instruction/list-community-instruction.component';
import { ViewCommunityInstructionComponent } from './view-community-instruction/view-community-instruction.component';

const routes: Routes = [
    {
        path: '',
        component: CommunityInstructionComponent,
        children: [
            { path: '', component: ListCommunityInstructionComponent },
            { path: 'add', component: AddCommunityInstructionComponent },
            { path: 'edit/:id', component: EditCommunityInstructionComponent },
            { path: 'view/:id', component: ViewCommunityInstructionComponent }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class CommunityInstructionRoutingModule {}
