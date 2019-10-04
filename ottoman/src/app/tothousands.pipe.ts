import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toThousands'
})
export class TothousandsPipe implements PipeTransform {

  transform(value: number): any {
    let stringValue = String( value ); // Convert the number to a string

    if(stringValue.length < 4) // Check if there is more than 3 digits
      return stringValue; // If not return the orignal string.

    for(let i = stringValue.length; i > 1; i--) // Loop backwards as we need to group them into 3s in reverse order
    {
      let truePosition = stringValue.length - i; // Get the true position of the current character

      if(!(i % 3) && truePosition > 0) // Check if the there isn't a remainder of 3
        stringValue = stringValue.substr(0, truePosition) + "," + stringValue.substr(truePosition, stringValue.length); // Break the string up and insert a comma
    } 

    return stringValue; // return the string
  }

}
