import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedTab: string = "vehicles";
  selectedIndex: number = -1;

  additionOpen: boolean = false;

  constructor(private router: Router, private menuCtrl: MenuController) {}

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

}