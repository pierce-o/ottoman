import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VehicleData } from '../../models/vehicleData';
import { StorageManagerService } from '../storage-manager.service';
import { DvlaData } from 'src/models/dvlaData';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {

  @Output() valueChange = new EventEmitter<number>();

  vehicles: VehicleData[] = [];
  selectedIndex: number = -1;

  constructor(private storage: StorageManagerService) { }

  ngOnInit() {

    this.updateVehicles();

  }

  updateVehicles() {
    this.storage.getAllDisplayableVehicles().then( data => {this.vehicles = data; console.log(this.vehicles);});
  }

  dateToColour(date) {
    let now = Date.now();

    if(date.getTime() > now) // check if their is still a valid mot
      date.setDate( (date.getDate() - 1 ) );

      if(date.getTime() < now) // One day remaining
        return 'red';
      else {
        date.setDate( (date.getDate() - 7 ) );

        if(date.getTime() < now) // One week remaining
          return 'orange';
        else
        {
          date.setMonth( (date.getMonth() - 1 ) );

          if(date.getTime() < now) // One month remaining
            return 'yellow';
          else
              return 'black';
        }
    }
  }

  checkDate(dvla: DvlaData, type: string): string {

    switch(type) {
      case 'mot':
        let motDate: Date = new Date( dvla.registrationDate/*dvla.motTests[0].expiryDate*/ );
        return this.dateToColour(motDate);
        break;

      case 'tax':
        let taxDate: Date = new Date( dvla.registrationDate/*dvla.motTests[0].expiryDate*/ );
        return this.dateToColour(taxDate);
        break;

      case 'sorn':
        let sornDate: Date = new Date( dvla.registrationDate/*dvla.motTests[0].expiryDate*/ );
        return this.dateToColour(sornDate);
        break;

      default:
        return 'black';
        break;
    }

  }

  selectIndex(value: number) {

    // Check if the index is already selected
    if(this.selectedIndex == value)
      this.selectedIndex = -1; // It it is then set the value to -1, deselecting the item
    else
      this.selectedIndex = value; // Else set it to this item

    this.valueChange.emit( this.selectedIndex ); // Emit the value
  }

}
