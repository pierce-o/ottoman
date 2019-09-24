import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iondate'
})
export class IondateformatPipe implements PipeTransform {

  transform(date: any, displayFormat: string): any {


    let dateDestructured = date.split(/[-T]/);

    let data = {
      year: dateDestructured[0],
      month: dateDestructured[1],
      day: dateDestructured[2],
      time: dateDestructured[3]
    }

    let finalString: string = "";

    displayFormat.split(':').forEach(element => {
      switch(element) {
        case "Y":
          finalString = finalString.concat(data.year);
        break;

        case "M":
            finalString = finalString.concat(data.month);
        break;

        case "D":
            finalString = finalString.concat(data.day);
        break;

        case "T":
            finalString = finalString.concat(data.time);
        break;

        default:
          break;

      }
    });

    return finalString;

  }

}
