import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ResearchComponent } from "./research.component";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
    {
        path: "",
        component: ResearchComponent,
        children: [
            { path: "", component: ListComponent },
            { path: "view/:id", component: ViewComponent },
            { path: "add", component: AddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResearchRoutingModule {}
