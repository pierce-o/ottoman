import { Component, OnInit } from '@angular/core';
import { VehicleData } from '../../models/vehicleData';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {

  vehicles: VehicleData[] = [];

  constructor(private storageManager: StorageManagerService) { }

  ngOnInit() {

    //this.storageManager.getAllDisplayableVehicles().subscribe( data => {

      

    //});

  }

}
