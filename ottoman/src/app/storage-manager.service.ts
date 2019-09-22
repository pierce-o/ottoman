import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleData } from 'src/models/vehicleData';
import { RegData } from 'src/models/regData';

const keys = {
  vehicles: 'vehicles',
  regs: 'regs'
}

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor(private storage: Storage) { }

  getAllDisplayableVehicles() : Observable<VehicleData[]> {
    return JSON.parse(this.storage.getItem( keys.vehicles )); // Return the parsed json of the vehicles list
  }

  getAllDisplayableRegs() : Observable<RegData[]> {
    return JSON.parse(this.storage.getItem( keys.regs )); // Return the parsed json of the vehicles list
  }

  registerVehicle(vehicle: VehicleData): Promise<any> {
    
    return this.storage.get( keys.vehicles ).then( ( vehicles: VehicleData[] ) => {
      if(vehicles) { // Check if the vehicles key already has a list and it is valid
        vehicles.push(vehicle); // Add the new vehicle to the end of the list
        return this.storage.set( keys.vehicles, vehicles ); // Set the new vehicles list to the vehicles key
      } else {
        // If there isn't already a list under that key then set the keys value in the object to a new list containing the registered vehicle 
        return this.storage.set( keys.vehicles, [vehicle] );
      }
    });
    
  }

}
