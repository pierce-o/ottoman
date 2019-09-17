import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedTab: string = "vehicles";
  selectedIndex: number;

  constructor(private router: Router) {}

  goToAddition() {
    this.router.navigate(['/add', this.selectedTab]);
  }

}