import { Component, OnInit, Input } from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { MotData } from 'src/models/motData';
import { Issue }  from '../../../models/issue';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss'],
})
export class VehicledetailsComponent implements OnInit {

  @Input() vehicleData: VehicleData;

  constructor() { }

  ngOnInit() {}

  displayDate(date: string): string {
    let options = {
      weekday: 'short', // Thursday will be Thur
      year: '2-digit', // Year will be the last two digits
      month: 'short', // March will be MAr
      day: 'numeric' // Day will be a singile number
    };
    return (new Date(date)).toLocaleDateString("en-GB", options);
  }

  generateIssueList(motData: MotData): Issue[] {

    let tempIssueList: Issue[] = []; 

    motData.rfrAndComments.forEach( comment => {

      let foundElement = tempIssueList.find(x => x.type == comment.type);
      if(foundElement == null || foundElement == undefined) {

        let tempIssue: Issue = {
          count: 1,
          displayText: comment.type,
          type: comment.type,
          text: comment.text
        };

        tempIssueList.push(tempIssue);

      } else {
        foundElement.count++;
      }

    });

    return tempIssueList;

  }

}
