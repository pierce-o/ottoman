import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EditPage
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
    EditPage,
    VehicleEditComponent
  ]
})
export class EditPageModule {}
