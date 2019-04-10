import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ActivityComponent } from "./activity.component";

const routes: Routes = [
    {
        path: "",
        component: ActivityComponent,
        children: [
            {
                path: "commInstruction",
                loadChildren:
                    "./commInstruction/commInstruction.module#CommInstructionModule"
            },
            {
                path: "lecturing",
                loadChildren: "./lecturing/lecturing.module#LecturingModule"
            },
            {
                path: "publicService",
                loadChildren:
                    "./publicService/publicService.module#PublicServiceModule"
            },
            {
                path: "research",
                loadChildren: "./research/research.module#ResearchModule"
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivityRoutingModule {}
