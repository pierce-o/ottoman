import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TitleCasePipe } from '@angular/common';
import { MotData } from 'src/models/motData';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  
  fuelTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'LPG'];
  dvlaColours: string[] = ['beige', 'black', 'blue', 'bronze', 'brown', 'buff', 'cream', 'gold', 'green', 'grey', 'ivory', 'maroon', 'orange', 'pink', 'purple', 'red', 'silver', 'turquoise', 'white', 'yellow'];

  motEntries: MotData[] = [];

  isManualMode: boolean = false;

  motResultValue: boolean = false;

  selectedMotResult: number = -1;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

    let mot: MotData = new MotData;
    mot.completedDate = "19th June 2019";
    mot.testResult = "FAILED";

    this.motEntries.push(mot);
    this.motEntries.push(mot);
    this.motEntries.push(mot);

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
  
}
