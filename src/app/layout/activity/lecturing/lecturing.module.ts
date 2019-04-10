import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LecturingComponent } from "./lecturing.component";
import { LecturingRoutingModule } from "./lecturing-routing.module";
import { AddComponent } from "./add/add.component";
import { ViewComponent } from "./view/view.component";
import { ListComponent } from "./list/list.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, LecturingRoutingModule, ReactiveFormsModule],
    declarations: [LecturingComponent, AddComponent, ViewComponent, ListComponent]
})
export class LecturingModule {}
