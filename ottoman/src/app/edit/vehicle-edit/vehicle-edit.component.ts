import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { NavController } from '@ionic/angular';
import { StorageManagerService } from 'src/app/storage-manager.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
})
export class VehicleEditComponent implements OnInit {

  @Input() vehicleData: VehicleData;
  vehicleIndex: number = -1;

  constructor(private navCtrl: NavController, private storage: StorageManagerService) { }

  ngOnInit() {

  }

  updateVehicle(): void {
    if(this.vehicleIndex != -1)
      this.storage.updateVehicle( this.vehicleIndex, this.vehicleData ).then( data => {
        if(data != null) {
          this.navCtrl.back();
          this.storage.updateVehicles();
        }
      });
  }

}
