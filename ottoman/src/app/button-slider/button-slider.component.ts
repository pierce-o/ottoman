import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-slider',
  templateUrl: './button-slider.component.html',
  styleUrls: ['./button-slider.component.scss'],
})
export class ButtonSliderComponent implements OnInit {

  @Input() firstValue: string;
  @Input() secondValue: string;

  @Output() valueChange = new EventEmitter<boolean>();

  firstSelected: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.firstSelected = !this.firstSelected;
    this.valueChange.emit( this.firstSelected );
  }

}
