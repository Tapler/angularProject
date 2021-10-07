import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentComponent } from './equipment.component';
import { EquipmentRoutingModule } from './equipment-routing.module';



@NgModule({
  declarations: [
    EquipmentComponent
  ],
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ]
})
export class EquipmentModule { }
