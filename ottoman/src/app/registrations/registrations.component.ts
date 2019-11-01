import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegData } from '../../models/regData';
import { StorageManagerService } from '../storage-manager.service';
import { VehicleData } from 'src/models/vehicleData';
import { Router } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent implements OnInit {

  @Output() valueChange = new EventEmitter<number>();

  registrations: RegData[];

  selectedIndex: number = -1;

  constructor( private router: Router, private storage: StorageManagerService ) { }

  ngOnInit() {

    this.storage.getRegEmitter().then( emitter => { 
      emitter.subscribe( data => {

        data.forEach(reg => {

          if(reg.storageType != "vehicle")
            return;
          
          this.getRelatedReg( reg ).then( relatedVehicle => {
            if(relatedVehicle != null && relatedVehicle != undefined) {
              reg.hasRelatedVehicle = true;
              reg.relatedVehicle = relatedVehicle;
            }
          });

        });

        this.registrations = data
      } ); 
    });
    this.storage.updateRegistrations();

  }

  getRelatedReg(reg: RegData): Promise<VehicleData> {
    return this.storage.getAllDisplayableVehicles().then( (vehicles: VehicleData[]) => {
      return vehicles.find( x => { return (x.dvlaData.registration.toLowerCase().trim() == reg.reg.toLowerCase().trim()) } );
    });

  }

  goToPage( regData: RegData ) {
    this.router.navigate(['/view', this.storage.getIndexOfReg(regData), 'registration']);
  }

  selectIndex(value: number, allowNull:boolean = false) {

    // Check if the index is already selected
    if(this.selectedIndex == value && allowNull == false)
      this.selectedIndex = -1; // It it is then set the value to -1, deselecting the item
    else
      this.selectedIndex = value; // Else set it to this item

    this.valueChange.emit( this.selectedIndex ); // Emit the value
  }

  convertToString(dateString: string): string {
    if(dateString != null && dateString != undefined && dateString != "") {
      let date = new Date( Number.parseInt( dateString ) );
      return date.toLocaleDateString();
    } else {
      return "";
    }
  }

}
