import { Component, OnInit } from '@angular/core';
import { RegData } from '../../models/regData';
import { StorageManagerService } from '../storage-manager.service';
import { VehicleData } from 'src/models/vehicleData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent implements OnInit {

  registrations: RegData[];

  constructor( private router: Router, private storage: StorageManagerService ) { }

  ngOnInit() {

    this.storage.getRegEmitter().then( emitter => { 
      emitter.subscribe( data => {
        
        data.forEach(reg => {
          if(reg.storage != 'vehicle')
            return;
          let relatedVehicle = this.getRelatedReg( reg );

          if(relatedVehicle != null && relatedVehicle != undefined) {
            reg.hasRelatedVehicle = true;
            reg.relatedVehicle = relatedVehicle;
          }

        });

        this.registrations = data
      } ); 
    });
    this.storage.updateRegistrations();

  }

  getRelatedReg(reg: RegData): VehicleData {
    let vehicleData = null; this.storage.getAllDisplayableVehicles().then( (vehicles: VehicleData[]) => {
      vehicleData = vehicles.find( x => { return (x.dvlaData.registration.toLowerCase().trim() == reg.reg.toLowerCase().trim()) } );
    });

    return vehicleData;
  }

  goToPage( regData: RegData ) {
    this.router.navigate(['/view', this.storage.getIndexOfReg(regData), 'registration']);
  }

}
