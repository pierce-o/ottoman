import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { VehicleData } from 'src/models/vehicleData';
import { RegData } from 'src/models/regData';
import { AngularDelegate } from '@ionic/angular';

const keys = {
  vehicles: 'vehicles',
  regs: 'regs'
}

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  vehiclesObserable: EventEmitter<VehicleData[]> = new EventEmitter<VehicleData[]>();
  registrationsObserable: EventEmitter<RegData[]> = new EventEmitter<RegData[]>();

  constructor(private storage: Storage) { }

  getRegEmitter(): Promise<EventEmitter<RegData[]>> {
    return new Promise<EventEmitter<RegData[]>>((resolve, reject) => {
      if(this.registrationsObserable != null)
        resolve(this.registrationsObserable);
      else
        reject();
    });
  }

  getVehicleEmitter(): Promise<EventEmitter<VehicleData[]>> {
    return new Promise<EventEmitter<VehicleData[]>>((resolve, reject) => {
      resolve(this.vehiclesObserable);
    });
  }

  updateVehicles() {
    this.getAllDisplayableVehicles().then( data => this.vehiclesObserable.emit( data ) );
  }

  updateRegistrations() {
    this.getAllDisplayableRegs().then( data => this.registrationsObserable.emit( data ) );
  }

  getAllDisplayableVehicles() : Promise<VehicleData[]> {
    return this.storage.get( keys.vehicles ); // Return the parsed json of the vehicles list
  }

  getAllDisplayableRegs() : Promise<RegData[]> {
    return this.storage.get( keys.regs ); // Return the parsed json of the vehicles list
  }

  clearAll(): Promise<any>  {
    return this.storage.clear();
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

  getVehicleById(index: number): Promise<any> {
    return this.storage.get( keys.vehicles ).then( ( vehicles: VehicleData[] ) => {
      if(vehicles) {
        if(index > -1 && index <= vehicles.length)
          return vehicles[index];
        else
          return null;
      } 
      else
        return null;
    });
  }

  removeVehicle(itemIndex: number): Promise<any> {

    return this.storage.get( keys.vehicles ).then( ( vehicles: VehicleData[] ) => {

      if(itemIndex > -1 && itemIndex <= vehicles.length){
        
        let filtered = vehicles.filter( (vehicle, index) => {
          if(index != itemIndex)
            return vehicle;
        });

        return this.storage.set( keys.vehicles, filtered );

      }

    });

  }

  getIndexOfVehicle(vehicleData: VehicleData): Promise<number> {
    return this.storage.get( keys.vehicles ).then( ( vehicles: VehicleData[] ) => {
      // Compare the reg and get the index of that element, this should be reliable since legally there is no way two cars can have the same current reg 
      return vehicles.findIndex( x => x.dvlaData.registration.toLowerCase().trim() == vehicleData.dvlaData.registration.toLowerCase().trim() );
    });
  }

  updateVehicle(itemIndex: number, updatedVehicle: VehicleData): Promise<any> {
    return this.storage.get( keys.vehicles ).then( (vehicles: VehicleData[] ) => {
      if(vehicles[itemIndex] != null && vehicles[itemIndex] != undefined && updatedVehicle != null && updatedVehicle != undefined ){
        vehicles[itemIndex] = updatedVehicle;
        return this.storage.set(keys.vehicles, vehicles);
      } else {
        return false;
      }
    });
  }

  registerReg(reg: RegData): Promise<any> {
    
    return this.storage.get( keys.regs ).then( ( regs: RegData[] ) => {
      if(regs) { // Check if the vehicles key already has a list and it is valid
        regs.push(reg); // Add the new vehicle to the end of the list
        return this.storage.set( keys.regs, regs ); // Set the new vehicles list to the vehicles key
      } else {
        // If there isn't already a list under that key then set the keys value in the object to a new list containing the registered vehicle 
        return this.storage.set( keys.regs, [reg] );
      }
    });
    
  }

  getRegById(index: number): Promise<any> {
    return this.storage.get( keys.regs ).then( ( regs: RegData[] ) => {
      if(regs) {
        if(index > -1 && index <= regs.length)
          return regs[index];
        else
          return null;
      } 
      else
        return null;
    });
  }

  removeReg(itemIndex: number): Promise<any> {

    return this.storage.get( keys.regs ).then( ( regs: RegData[] ) => {

      if(itemIndex > -1 && itemIndex <= regs.length){
        
        let filtered = regs.filter( (reg, index) => {
          if(index != itemIndex)
            return reg;
        });

        return this.storage.set( keys.regs, filtered );

      }

    });

  }

  getIndexOfReg(regData: RegData): Promise<number> {
    return this.storage.get( keys.regs ).then( ( regs: RegData[] ) => {
      return regs.findIndex( x => x.reg.toLowerCase().trim() == regData.reg.toLowerCase().trim() );
    });
  }

  updateReg(itemIndex: number, updatedReg: RegData): Promise<any> {
    return this.storage.get( keys.regs ).then( (regs: RegData[] ) => {
      if(regs[itemIndex] != null && regs[itemIndex] != undefined && updatedReg != null && updatedReg != undefined ){
        regs[itemIndex] = updatedReg;
        return this.storage.set(keys.regs, regs);
      } else {
        return false;
      }
    });
  }

}
