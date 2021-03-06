import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { StorageManagerService } from '../storage-manager.service';
import { VehiclesComponent } from '../vehicles/vehicles.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("vehiclesList", {static: false}) vehiclesList : VehiclesComponent;
  @ViewChild("registrationList", {static: false}) registrationList : VehiclesComponent;

  selectedTab: string = "vehicles";
  selectedIndex: number = -1;

  additionOpen: boolean = false;

  constructor(private router: Router, private menuCtrl: MenuController, private storage: StorageManagerService, private alertCtrl: AlertController) {}

  goToAddition() {
    this.additionOpen = true;

    this.changeMenuState(false);

  }

  changeMenuState(state: boolean): void {
    this.menuCtrl.enable(state);
  }

  controlButton(): void {

    if(this.additionOpen == false) {
      this.menuCtrl.open();
    }
    else
    {
      this.menuCtrl.close();
      this.changeMenuState(true);
      this.additionOpen = false;
    }
  }

  editEntry(): void {

    // Make sure that a vehicle has been selected
    if(this.selectedIndex == -1)
      return;

    switch(this.selectedTab)
    {
      case 'vehicles': // Carry out the deletion for the vehicles
        // Navigate to the edit page passing the selected index and the type vehicle
        this.router.navigate( ['/edit', this.selectedIndex, 'vehicle'] ).then( data => {
          // Deseleted the selected vehicle
          this.vehiclesList.selectIndex(-1, true);
        });

        break;

      case 'registrations':

          this.router.navigate( ['/edit', this.selectedIndex, 'registration'] ).then( data => {
            // Deseleted the selected vehicle
            this.registrationList.selectIndex(-1, true);
          });

        break;

      default: 
        break;

    }

  }

  deleteEntry(): void {

    // Make sure that a vehicle has been selected
    if(this.selectedIndex == -1)
      return;
    
    switch(this.selectedTab)
    {
      case 'vehicles': // Carry out the deletion for the vehicles

        // Create an options value
        let vehOpts = {
          header: 'Are you sure you want to delete this vehicle?',
          message: 'Deleting this will delete all data related to this vehicle.',
          buttons: [
            {
              text: 'Okay',
              handler: () => { // If okay is selected then remove the vehicle
                this.storage.removeVehicle(this.selectedIndex).then( data => {
                  // Once the vehicle has been removed then update the vehicles list and remove the selected index
                  this.storage.updateVehicles();
                  this.vehiclesList.selectIndex(-1);
                });
              }
            },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]
        };

        this.alertCtrl.create( vehOpts ).then( alert => alert.present() );

        break;

      case 'registrations':

        // Create an options value
        let regOpts = {
          header: 'Are you sure you want to delete this registration?',
          message: 'Deleting this will delete all data related to this registration.',
          buttons: [
            {
              text: 'Okay',
              handler: () => { // If okay is selected then remove the vehicle
                this.storage.removeReg(this.selectedIndex).then( data => {
                  // Once the vehicle has been removed then update the vehicles list and remove the selected index
                  this.storage.updateRegistrations();
                  this.registrationList.selectIndex(-1);
                });
              }
            },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]
        };

        this.alertCtrl.create( regOpts ).then( alert => alert.present() );

        break;  
        
      default: 
        break;

    }
  }

  handleIndex(index: number): void {
    if(index == -999) {
      this.selectedTab = "vehicles";
      this.goToAddition();
    }
    else
      this.selectedIndex = index;
  }

}