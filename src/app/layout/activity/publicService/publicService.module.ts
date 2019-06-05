import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicServiceComponent } from "./publicService.component";
import { PublicServiceRoutingModule } from "./publicService-routing.module";
import { AddComponent } from "./add/add.component";
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [CommonModule, PublicServiceRoutingModule],
    declarations: [PublicServiceComponent, AddComponent, ListComponent]
})
export class PublicServiceModule {}
