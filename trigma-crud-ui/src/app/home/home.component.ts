import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vehiclDetails: any[] = [];
  constructor(private vehicleService: VehicleService) {}
  ngOnInit(): void {
    this.vehicleService.getVehicleDetails().subscribe((info) => {
      // console.log(info);
      // this.vehiclDetails = info.vehicleDetails.reverse().slice(0, 3);
      this.vehiclDetails = info.vehicleDetails.reverse();
    });
  }
}
