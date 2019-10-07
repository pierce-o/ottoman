import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IondateformatPipe } from '../iondateformat.pipe'
import { TothousandsPipe } from '../tothousands.pipe';
import { FormatDatePipe } from '../format-date.pipe'

@NgModule({
  declarations: [
    IondateformatPipe,
    TothousandsPipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IondateformatPipe,
    TothousandsPipe,
    FormatDatePipe
  ]
})
export class PipesModule { }
