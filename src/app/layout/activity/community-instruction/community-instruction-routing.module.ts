import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommunityInstructionComponent } from './community-instruction.component';


const routes: Routes = [
    {
        path: '',
        component: CommunityInstructionComponent,
        children: [
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class CommunityInstructionRoutingModule {}
