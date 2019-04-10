import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResearchComponent } from "./research.component";
import { ResearchRoutingModule } from "./research-routing.module";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, ResearchRoutingModule, ReactiveFormsModule],
    declarations: [ResearchComponent, AddComponent, ListComponent, ViewComponent]
})
export class ResearchModule {}
