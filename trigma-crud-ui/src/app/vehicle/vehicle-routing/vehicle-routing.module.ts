import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component'

const vehicleRoutes: Routes = [
  { path: 'vehicle', component: VehicleListComponent },
  { path: 'vehicle/:id', component: VehicleDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(vehicleRoutes)],
  exports: [RouterModule],
})
export class VehicleRoutingModule {}
