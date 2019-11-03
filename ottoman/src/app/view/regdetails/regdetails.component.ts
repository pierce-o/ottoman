import { Component, OnInit, Input } from '@angular/core';
import { RegData } from 'src/models/regData';

@Component({
  selector: 'app-reg-details',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.scss'],
})
export class RegdetailsComponent implements OnInit {

  @Input() regData: RegData;

  constructor() { }

  ngOnInit() {}

}
