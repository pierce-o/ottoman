import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IondateformatPipe } from '../iondateformat.pipe'
import { TothousandsPipe } from '../tothousands.pipe';

@NgModule({
  declarations: [
    IondateformatPipe,
    TothousandsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IondateformatPipe,
    TothousandsPipe
  ]
})
export class PipesModule { }
