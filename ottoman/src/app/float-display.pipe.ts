import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floatDisplay'
})
export class FloatDisplayPipe implements PipeTransform {

  transform(value: number): any {
    if(value == null || value == undefined)
      return '';
    if(Number.isInteger( value ))
      return value.toString() + '.0';
    return value.toString();
  }

}
