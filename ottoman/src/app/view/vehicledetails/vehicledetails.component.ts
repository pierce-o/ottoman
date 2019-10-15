import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { VehicleData } from 'src/models/vehicleData';
import { MotData } from 'src/models/motData';
import { Issue }  from '../../../models/issue';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.scss'],
})
export class VehicledetailsComponent implements OnInit {

  @Input() vehicleData: VehicleData;
  @Output() selectedMot = new EventEmitter<number>();

  displayingAll: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    
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

  goToMot(index: number) {
    this.selectedMot.emit( index );
  }

}
