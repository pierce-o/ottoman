import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { StorageManagerService } from '../storage-manager.service';
import { VehicleData } from 'src/models/vehicleData';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  index: number = -1;
  type: string = null;
  selectedMot: number = 1;

  vehicle: VehicleData = new VehicleData();

  constructor( private navCtrl: NavController, private activeRoute: ActivatedRoute, private storage: StorageManagerService ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( map => {
      this.index = Number.parseInt( map.get('index') );
      this.type = map.get('type');
    } );

    this.storage.getVehicleById( this.index ).then( vehicle => this.vehicle = vehicle );

  }

  goBack(): void {
    this.navCtrl.back();
  }

}
