import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleData } from 'src/models/vehicleData';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor() { }

  getAllDisplayableVehicles() : Observable<VehicleData> {
    return null;
  }

  getAllDisplayableRegs() : Observable<VehicleData> {
    return null;
  }

}
