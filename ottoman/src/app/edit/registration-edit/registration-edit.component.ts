import { Component, OnInit } from '@angular/core';
import { RegData } from 'src/models/regData';

@Component({
  selector: 'app-registration-edit',
  templateUrl: './registration-edit.component.html',
  styleUrls: ['./registration-edit.component.scss'],
})
export class RegistrationEditComponent implements OnInit {

  registrationData: RegData = null;
  registrationIndex: number = -1;

  regError: boolean = false;

  constructor() { }

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

}
