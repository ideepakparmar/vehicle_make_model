import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VehicleService } from '../../vehicle.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css'],
})
export class VehicleDetailComponent implements OnInit {
  vehicle: any[] = [];
  constructor(
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.vehicleService.getVehicle(params.get('id'))
        )
      )
      .subscribe((vehicle) => {
        this.vehicle = vehicle.vehicleInfo[0];
      });
  }
  goBack(): void {
    this.location.back();
  }
}
