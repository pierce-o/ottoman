import { Component, OnInit, Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { NavController } from '@ionic/angular';
import { StorageManagerService } from 'src/app/storage-manager.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
})
export class VehicleEditComponent implements OnInit {

  @Input() vehicleData: VehicleData;

  constructor(private navCtrl: NavController, private storage: StorageManagerService) { }

  ngOnInit() {}

  updateVehicle(): void {

  }

}
