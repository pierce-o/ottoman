import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VehicleData } from '../../models/vehicleData';
import { StorageManagerService } from '../storage-manager.service';
import { DvlaData } from 'src/models/dvlaData';
import { NavController } from '@ionic/angular';
import { ViewPage } from '../view/view.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {

  @Output() valueChange = new EventEmitter<number>();

  vehicles: VehicleData[] = [];
  selectedIndex: number = -1;

  constructor(private storage: StorageManagerService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {

    this.storage.vehiclesObserable.subscribe( data => this.vehicles = data );

    this.storage.updateVehicles();

  }

  dateToColour(dateString) {
    let date = new Date(dateString);
    let now = Date.now();

    if(date.getTime() < now) // check if their is still a valid mot
      date.setDate( (date.getDate() - 1 ) );

      if(date.getTime() < now) // One day remaining
        return '#D62626';
      else {
        date.setDate( (date.getDate() - 7 ) );

        if(date.getTime() < now) // One week remaining
          return '#cf7b21';
        else
        {
          date.setMonth( (date.getMonth() - 1 ) );

          if(date.getTime() < now) // One month remaining
            return '#d6c84d';
          else
              return 'black';
        }
    }
  }

  checkDate(dvla: VehicleData, type: string): string {

    switch(type) {
      case 'mot':
        if(!dvla.hasMot)
          return '#D62626';
        let motDate: Date = new Date( dvla.motDueDate );
        return this.dateToColour(motDate);
        break;

      case 'tax':
        if(!dvla.hasTax)
          return '#D62626';
        let taxDate: Date = new Date( dvla.taxDueDate );
        return this.dateToColour(taxDate);
        break;

      case 'sorn':
        if(!dvla.isSORNd)
          return '#D62626';
        let sornDate: Date = new Date( dvla.sornDate );
        return this.dateToColour(sornDate);
        break;

      default:
        return 'black';
        break;
    }

  }

  selectIndex(value: number, allowNull:boolean = false) {

    // Check if the index is already selected
    if(this.selectedIndex == value && allowNull == false)
      this.selectedIndex = -1; // It it is then set the value to -1, deselecting the item
    else
      this.selectedIndex = value; // Else set it to this item

    this.valueChange.emit( this.selectedIndex ); // Emit the value
  }

  viewEntry(index: number): void {

    this.router.navigate( ['/view', index, 'vehicle'] );

  }

  getDate(dateString: string) {
    let date = new Date( dateString );
    return date.toLocaleDateString();
  }

}
