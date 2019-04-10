import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicServiceComponent } from "./publicService.component";
import { PublicServiceRoutingModule } from "./publicService-routing.module";
import { AddComponent } from "./add/add.component";

@NgModule({
    imports: [CommonModule, PublicServiceRoutingModule],
    declarations: [PublicServiceComponent, AddComponent]
})
export class PublicServiceModule {}
