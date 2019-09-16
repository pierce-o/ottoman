import { Component, OnInit } from '@angular/core';
import { VehicleData } from '../../models/vehicleData';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {

  vehicles: VehicleData[] = [];

  constructor() { }

  ngOnInit() {}

}
