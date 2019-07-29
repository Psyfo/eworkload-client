import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddPublicServiceComponent } from './add-public-service/add-public-service.component';
import { EditPublicServiceComponent } from './edit-public-service/edit-public-service.component';
import { ListPublicServiceComponent } from './list-public-service/list-public-service.component';
import { PublicServiceRoutingModule } from './public-service-routing.module';
import { PublicServiceComponent } from './public-service.component';
import { ViewPublicServiceComponent } from './view-public-service/view-public-service.component';

@NgModule({
    imports: [CommonModule, PublicServiceRoutingModule],
    declarations: [
        PublicServiceComponent,
        AddPublicServiceComponent,
        ListPublicServiceComponent,
        EditPublicServiceComponent,
        ViewPublicServiceComponent
    ]
})
export class PublicServiceModule {}
