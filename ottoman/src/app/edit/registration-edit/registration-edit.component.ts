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

  constructor() { }

  ngOnInit() {}

}
