import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPage } from './view.page';
import { MotViewComponent  } from './mot-view/mot-view.component';
import { VehicledetailsComponent  } from './vehicledetails/vehicledetails.component';
import { RegdetailsComponent } from './regdetails/regdetails.component';

import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [ViewPage, MotViewComponent, VehicledetailsComponent, RegdetailsComponent]
})
export class ViewPageModule {}
