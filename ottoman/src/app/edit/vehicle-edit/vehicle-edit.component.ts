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
  regError: boolean = false;

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

  restrictInput(e): void {
    var regex = /(^[^Z|^I]{2}[0-9]{2}\s[^Z|^I]{3}$)|(^(([1-9]{1,3}\s[^Z|^I]{1,3}$)|([^Z|^I]{1,3}\s[1-9]{1,3}$)))|(^[^Z|^I]{3}\s[1-9]{1,3}[^Z|^I]{1}$)|(^[^Z|^I]{1}[0-9]{1,3}\s[^Z|^I]{3}$)|(^[A-Z]{3}\s[0-9]{1,4}$)/;

    var elementValue: string = e.srcElement.value;

    if(!regex.test(elementValue))
      this.regError = true;
    else
      this.regError = false;
  }

  upperCase(e): void {
    var elementValue: string = e.srcElement.value;
    e.srcElement.value = elementValue.toUpperCase();
  }

}
