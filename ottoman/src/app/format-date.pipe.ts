import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: any): any {
    let options = {
      weekday: 'short', // Thursday will be Thur
      year: '2-digit', // Year will be the last two digits
      month: 'short', // March will be MAr
      day: 'numeric' // Day will be a singile number
    };
    return (new Date(date)).toLocaleDateString("en-GB", options);
  }

}
