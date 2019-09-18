import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { VehiclesComponent } from '../vehicles/vehicles.component';
import { RegistrationsComponent } from '../registrations/registrations.component';

import { VehicleComponent } from '../entry-addition/vehicle/vehicle.component';
import { RegistrationComponent } from '../entry-addition/registrations/registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    VehiclesComponent,
    RegistrationsComponent,
    VehicleComponent,
    RegistrationComponent
  ]
})
export class HomePageModule {}
