import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.scss'],
})
export class ButtonSliderComponent implements OnInit {

  @Input() firstValue: string;
  @Input() secondValue: string;

  firstSelected: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
