import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedTab: string = "vehicles";
  selectedIndex: number = -1;

  additionOpen: boolean = false;

  constructor(private router: Router, private menuCtrl: MenuController, private storage: StorageManagerService, private alertCtrl: AlertController) {}

  goToAddition() {
    this.additionOpen = true;

    this.changeMenuState(false);

    //this.router.navigate(['/add', this.selectedTab]);
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

  deleteEntry(): void {

    switch(this.selectedTab)
    {
      case 'vehicles':

        let opts = {
          header: 'Are you sure you want to delete this vehicle?',
          message: 'Deleting this will delete all data related to this vehicle.',
          buttons: [
            {
              text: 'Okay',
              handler: () => {
                this.storage.removeVehicle(this.selectedIndex);
              }
            },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]
        };

        this.alertCtrl.create( opts ).then( alert => alert.present() );

        break;

      default: 
        break;

    }
  }

}