import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { VehicleRoutingModule } from './vehicle/vehicle-routing/vehicle-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicleService } from './vehicle.service';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle/vehicle-detail/vehicle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicleListComponent,
    VehicleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VehicleRoutingModule,
    FormsModule,
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
