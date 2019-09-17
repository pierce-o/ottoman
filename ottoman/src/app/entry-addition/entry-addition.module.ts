import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntryAdditionPage } from './entry-addition.page';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegistrationComponent } from './registrations/registration.component';

const routes: Routes = [
  {
    path: '',
    component: EntryAdditionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    EntryAdditionPage,
    VehicleComponent,
    RegistrationComponent
  ]
})
export class EntryAdditionPageModule {}
