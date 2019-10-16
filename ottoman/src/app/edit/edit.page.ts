import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageManagerService } from '../storage-manager.service';
import { VehicleData } from 'src/models/vehicleData';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

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
        } );
      }
      
    } );

  }

  goBack(): void {
    this.navCtrl.back();
  }

}
