import { Component, OnInit } from '@angular/core';
import { RegData } from '../../models/regData';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent implements OnInit {

  registrations: RegData[] = [];

  constructor() { }

  ngOnInit() {}

}
