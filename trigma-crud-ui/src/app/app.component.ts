import { Component } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vehicle Info';
  vehicleUrl = "/vehicle"
  routeUrl: any;
  constructor(private vehicleService: VehicleService, private route: Router) {
    route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Navigation started.
        this.routeUrl = event.url;
      }
    });
  }

  showAddVehicleBox(e): void {
    e.preventDefault();
    this.vehicleService.showAddVehicleBox = !this.vehicleService
      .showAddVehicleBox;
  }
}
