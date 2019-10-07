import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { MotData } from 'src/models/motData';
import { MotDataComments } from 'src/models/motDataComments';
import { SimpleChange } from '@angular/core';

@Component({
  selector: 'app-mot-view',
  templateUrl: './mot-view.component.html',
  styleUrls: ['./mot-view.component.scss'],
})
export class MotViewComponent implements OnInit {

  @Input() index: number;

  motData: MotData = null;

  dangerous: MotDataComments[] = [];
  major: MotDataComments[] = [];
  minor: MotDataComments[] = [];
  advisory: MotDataComments[] = [];

  @Input() vehicleData: VehicleData;

  constructor() { }

  ngOnInit() {

  }

  update():void {
    this.motData = this.vehicleData.dvlaData.motTests[ this.index ];

    if(this.motData != null){

      if(this.motData.rfrAndComments != undefined){
        this.dangerous = this.motData.rfrAndComments.filter( x => {
          console.log(x.type);
          return (x.type.toLowerCase() == "dangerous" || x.dangerous == true);
        });

        this.major = this.motData.rfrAndComments.filter( x => {
          console.log(x.type);
          return (x.type.toLowerCase() == "fail");
        });

        this.minor = this.motData.rfrAndComments.filter( x => {
          console.log(x.type);
          return (x.type.toLowerCase() == "minor");
        });

        this.advisory = this.motData.rfrAndComments.filter( x => {
          console.log(x.type);
          return (x.type.toLowerCase() == "advisory");
        });
      }
      
    }
  }

  ngOnChanges(changes: SimpleChange) {
    console.log(changes['vehicleData'].currentValue);
    this.update();
  }

}
