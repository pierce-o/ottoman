import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IondateformatPipe } from '../iondateformat.pipe'
import { TothousandsPipe } from '../tothousands.pipe';
import { FormatDatePipe } from '../format-date.pipe'
import { FloatDisplayPipe } from '../float-display.pipe';

@NgModule({
  declarations: [
    IondateformatPipe,
    TothousandsPipe,
    FormatDatePipe,
    FloatDisplayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IondateformatPipe,
    TothousandsPipe,
    FormatDatePipe,
    FloatDisplayPipe
  ]
})
export class PipesModule { }
