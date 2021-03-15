import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class VehicleService {
  private apiUrl = 'http://localhost:3000/api';
  showAddVehicleBox: boolean = true;
  constructor(private http: HttpClient) {}

  getVehicleDetails(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((_) => this.handleData),
      catchError(this.handleError)
    );
  }

  getVehicle(id: string): Observable<any> {
    return this.http.get(this.apiUrl + '/' + id).pipe(
      tap((_) => this.handleData),
      catchError(this.handleError)
    );
  }

  createVehicle(vehicle: any): Observable<any> {
    return this.http.post(this.apiUrl, vehicle).pipe(
      tap((_) => this.handleData),
      catchError(this.handleError)
    );
  }

  updateVehicle(vehicle: any): Observable<any> {
    return this.http.put(this.apiUrl, vehicle).pipe(
      tap((_) => this.handleData),
      catchError(this.handleError)
    );
  }

  deleteVehicle(vehicle: any): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + vehicle._id).pipe(
      tap((_) => this.handleData),
      catchError(this.handleError)
    );
  }

  private handleData(res: any) {
    let body = res.json();
    console.log('RESPONSE :::', body); // for development purposes only
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for development purposes only
    return Promise.reject(error.message || error);
  }
}
