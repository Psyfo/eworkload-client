import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { PublicServiceRoutingModule } from './public-service-routing.module';
import { PublicServiceComponent } from './public-service.component';

@NgModule({
    imports: [CommonModule, PublicServiceRoutingModule],
    declarations: [
        PublicServiceComponent
    ]
})
export class PublicServiceModule {}
