import { PrimeNgModulesModule } from 'src/app/shared/modules/prime-ng-modules.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddResearchComponent } from './add-research/add-research.component';
import { EditResearchComponent } from './edit-research/edit-research.component';
import { ListResearchComponent } from './list-research/list-research.component';
import { ResearchRoutingModule } from './research-routing.module';
import { ResearchComponent } from './research.component';
import { ViewResearchComponent } from './view-research/view-research.component';

@NgModule({
    imports: [
        CommonModule,
        ResearchRoutingModule,
        ReactiveFormsModule,
        PrimeNgModulesModule
    ],
    declarations: [
        ResearchComponent,
        ViewResearchComponent,
        AddResearchComponent,
        ListResearchComponent,
        EditResearchComponent
    ]
})
export class ResearchModule {}
