import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'LPG'];
  dvlaColours: string[] = ['beige', 'black', 'blue', 'bronze', 'brown', 'buff', 'cream', 'gold', 'green', 'grey', 'ivory', 'maroon', 'orange', 'pink', 'purple', 'red', 'silver', 'turquoise', 'white', 'yellow'];

  isManualMode: boolean = false;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {}

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
  
}
