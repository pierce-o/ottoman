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
    return (new Date(date)).toDateString();
  }

  generateIssueList(motData: MotData): Issue[] {

    let tempIssueList: Issue[] = []; 

    motData.rfrAndComments.forEach( comment => {

      let foundElement = tempIssueList.find(x => x.type == comment.type);
      if(foundElement == null || foundElement == undefined) {

        let tempIssue: Issue = {
          count: 1,
          displayText: comment.type,
          type: comment.type
        };

        tempIssueList.push(tempIssue);

      } else {
        foundElement.count++;
      }

    });

    return tempIssueList;

  }

}
