import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageManagerService } from '../storage-manager.service';
import { VehicleData } from 'src/models/vehicleData';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  @ViewChild('vehicleEdit', {static: false}) vehicleEdit: VehicleEditComponent;

  index: number = -1;
  type: string;

  vehicle: VehicleData = null;

  constructor( private navCtrl: NavController, private activeRoute: ActivatedRoute, private storage: StorageManagerService ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( map => {
      this.index = Number.parseInt( map.get('index') );
      this.type = map.get('type');

      if(this.type == "vehicle") {
        this.storage.getVehicleById( this.index ).then( vehicle => {
          this.vehicle = vehicle;
          this.vehicleEdit.vehicleData = vehicle;
          this.vehicleEdit.vehicleIndex = this.index;
        } );
      }
    } );
  }

  goBack(): void {
    this.navCtrl.back();
  }

  saveData(): void {
    switch(this.type) {
      case 'vehicle':
          this.vehicleEdit.updateVehicle();
        break;

      default: 
        break;
    }
  }

}
