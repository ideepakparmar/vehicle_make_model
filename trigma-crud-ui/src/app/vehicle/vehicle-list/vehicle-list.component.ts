import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  vehiclDetails: any[] = [];
  vehicle: any = {};
  vehicleToEdit: any = {};
  apiMessage: string;
  vehicleToDelete: any = {};
  constructor(public vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.showAddVehicleBox = true;
    this.vehicleService.getVehicleDetails().subscribe((info) => {
      this.vehiclDetails = info.vehicleDetails;
    });
  }

  AddVehicle(veh: any): void {
    if (!veh) {
      return;
    }

    this.vehicleService.createVehicle(veh).subscribe((v) => {
      // console.log(v);
      this.vehiclDetails.push(v.vehicle);
    });
  }

  showEditVehicle(vehicle: any): void {
    this.vehicleToEdit = vehicle;
    this.apiMessage = '';
  }

  EditVehicle(vehicle: any): void {
    if (!vehicle) {
      return;
    }
    vehicle.id = this.vehicleToEdit._id;
    this.vehicleService.updateVehicle(vehicle).subscribe((veh) => {
      const updatedVehicles = this.vehiclDetails.map((t) => {
        if (veh.vehicleInfo._id !== t._id) {
          return t;
        }
        return { ...t, ...veh.vehicleInfo };
      });
      this.apiMessage = veh.message;
      this.vehiclDetails = updatedVehicles;
    });
  }

  showDeleteVehicle(vehicle: any): void {
    this.vehicleToDelete = vehicle;
    this.apiMessage = '';
  }

  DeleteVehicle(vehicle: any): void {
    if (!vehicle) {
      return;
    }
    this.vehicleService.deleteVehicle(vehicle).subscribe((veh) => {
      console.log(vehicle);
      console.log(veh);
      const filteredTodos = this.vehiclDetails.filter((t) => t._id !== veh._id);
      this.apiMessage = veh.message;
      this.vehiclDetails = filteredTodos;
    });
  }
}
