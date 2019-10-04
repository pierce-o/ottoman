import { Component, OnInit, Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss'],
})
export class VehicledetailsComponent implements OnInit {

  @Input() vehicleData: VehicleData;

  constructor() { }

  ngOnInit() {}

  displayDate(date: string): string {
    return (new Date(date)).toDateString();
  }

}
