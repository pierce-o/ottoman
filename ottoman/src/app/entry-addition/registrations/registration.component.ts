import { Component, OnInit } from '@angular/core';
import { RegData } from 'src/models/regData';
import { StorageManagerService } from 'src/app/storage-manager.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  regError: boolean = false;
  tempRegdata: RegData = new RegData();

  constructor(private navCtrl: NavController, private storage: StorageManagerService) { }

  ngOnInit() {}

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

  addReg(): void {

    this.tempRegdata.dateAdded = Date.now().toString();

    this.storage.registerReg( this.tempRegdata ).then( data => {
      this.storage.updateRegistrations();
      this.navCtrl.back();
      this.tempRegdata = new RegData();
    });

  }

}
