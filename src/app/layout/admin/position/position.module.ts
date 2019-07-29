import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { AddPositionComponent } from './add-position/add-position.component';
import { EditPositionComponent } from './edit-position/edit-position.component';
import { ViewPositionComponent } from './view-position/view-position.component';
import { ListPositionComponent } from './list-position/list-position.component';


@NgModule({
  declarations: [PositionComponent, AddPositionComponent, EditPositionComponent, ViewPositionComponent, ListPositionComponent],
  imports: [
    CommonModule,
    PositionRoutingModule
  ]
})
export class PositionModule { }
