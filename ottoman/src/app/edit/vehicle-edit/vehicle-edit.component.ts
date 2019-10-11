import { Component, OnInit, Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss'],
})
export class VehicleEditComponent implements OnInit {

  @Input() vehicle: VehicleData;

  constructor() { }

  ngOnInit() {}

  updateVehicle(): void {
    
  }

}
