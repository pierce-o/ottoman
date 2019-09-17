import { Component, OnInit } from '@angular/core';
import { RegData } from '../../models/regData';
import { StorageManagerService } from '../storage-manager.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss'],
})
export class RegistrationsComponent implements OnInit {

  registrations: RegData[] = [];

  constructor( private storageManager: StorageManagerService ) { }

  ngOnInit() {

    //this.storageManager.getAllDisplayableRegs().subscribe( data => {

      

    //});

  }

}
