import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { MotData } from 'src/models/motData';

@Component({
  selector: 'app-mot-view',
  templateUrl: './mot-view.component.html',
  styleUrls: ['./mot-view.component.scss'],
})
export class MotViewComponent implements OnInit {

  @Input() vehicleData: VehicleData;
  @Input() index: number;

  motData: MotData = null;

  constructor() { }

  ngOnInit() {
    this.motData = this.vehicleData.dvlaData.motTests[ this.index ];
  }

}
