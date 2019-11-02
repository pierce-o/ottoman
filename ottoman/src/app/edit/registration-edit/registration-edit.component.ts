import { Component, OnInit, Input } from '@angular/core';
import { RegData } from 'src/models/regData';
import { StorageManagerService } from 'src/app/storage-manager.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.scss'],
})
export class RegistrationEditComponent implements OnInit {

  @Input() registrationData: RegData;
  registrationIndex: number = -1;
  regError: boolean = false;

  constructor(private storage: StorageManagerService, private navCtrl: NavController) { }

  ngOnInit() {

  }

  updateReg(): void {
    if(this.registrationIndex != -1)
      this.storage.updateReg( this.registrationIndex, this.registrationData ).then( data => {
        if(data != null) {
          this.navCtrl.back();
          this.storage.updateVehicles();
        }
      });
  }

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

}
