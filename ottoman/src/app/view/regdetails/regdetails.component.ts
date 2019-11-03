import { Component, OnInit, Input } from '@angular/core';
import { RegData } from 'src/models/regData';
import { Router } from '@angular/router';
import { StorageManagerService } from 'src/app/storage-manager.service';

@Component({
  selector: 'app-reg-details',
  templateUrl: './regdetails.component.html',
  styleUrls: ['./regdetails.component.scss'],
})
export class RegdetailsComponent implements OnInit {

  @Input() regData: RegData;

  constructor(private router: Router, private storage: StorageManagerService) { }

  ngOnInit() {}

  goToEdit(): void {
    this.storage.getIndexOfReg( this.regData ).then( index => this.router.navigate(['/edit', index, 'registration']));
  }

}
