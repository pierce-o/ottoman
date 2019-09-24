import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IondateformatPipe } from '../iondateformat.pipe'

@NgModule({
  declarations: [
    IondateformatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IondateformatPipe
  ]
})
export class PipesModule { }
