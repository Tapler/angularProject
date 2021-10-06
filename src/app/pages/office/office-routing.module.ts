import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'equipment', loadChildren: './equpment/equipment.module#EquipmentModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
  { path: '**', redirectTo: 'equipment' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
