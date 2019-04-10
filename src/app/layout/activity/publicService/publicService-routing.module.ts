import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicServiceComponent } from "./publicService.component";
import { AddComponent } from "./add/add.component";

const routes: Routes = [
    {
        path: "",
        component: PublicServiceComponent,
        children: [{ path: "add", component: AddComponent }]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes), CommonModule]
})
export class PublicServiceRoutingModule {}
