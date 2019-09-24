import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { TitleCasePipe } from '@angular/common';
import { MotData } from 'src/models/motData';
import { VehicleData } from 'src/models/vehicleData';
import { StorageManagerService } from 'src/app/storage-manager.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  
  // All fuel types
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'GAS/BI-FUEL'];

  // All offical colours avaliable by the dvla
  dvlaColours: string[] = ['beige', 'black', 'blue', 'bronze', 'brown', 'buff', 'cream', 'gold', 'green', 'grey', 'ivory', 'maroon', 'orange', 'pink', 'purple', 'red', 'silver', 'turquoise', 'white', 'yellow'];

  isManualMode: boolean = false;

  tempMot: MotData = new MotData;

  selectedMotResult: number = -1;

  tempVehicle: VehicleData = new VehicleData();

  constructor(public loadingController: LoadingController, private storage: StorageManagerService, private toastController: ToastController) { }

  ngOnInit() {

  }

  async getDVLADetails() {
    
    let spinnerInstance = await this.loadingController.create( {message: "Getting vehicle details", duration: 5000, spinner: "crescent"} );

    await spinnerInstance.present();

    // Make an API call to the server requesting DVLA information
    // This API call is a middle man for the DVLA api as it allows us
    // to restrict the amount of calls that can be sent to the api
    // as the DVLA only permit as certain amount of API requests

  }

  toggleManual() {
    this.isManualMode = !this.isManualMode;
  }

  addMotHistory(): void {
    this.tempVehicle.dvlaData.motTests.push( this.tempMot );
    this.tempMot = new MotData;
  }

  removeMotHistory(): void {
    
    // Check that the selected mot result is valid 
    if(this.selectedMotResult < 0 || this.selectedMotResult > this.tempVehicle.dvlaData.motTests.length)
      return;

    // Filter each of the mot entries and don't return the selected index
    this.tempVehicle.dvlaData.motTests = this.tempVehicle.dvlaData.motTests.filter( (motEntry, index) => {
      if(index !== this.selectedMotResult)
        return motEntry;
    });

    // Reset the mot result
    this.selectedMotResult = -1;

  }

  addVehicle(): void {
    this.storage.registerVehicle( this.tempVehicle ).then( result => {
      this.showToast("Added!");
    });
    this.tempVehicle = new VehicleData();
  }

  showToast(string: string) {
    let toast = this.toastController.create( {message: string, duration: 1500} );
  }
  
}
