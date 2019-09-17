import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entry-addition',
  templateUrl: './entry-addition.page.html',
  styleUrls: ['./entry-addition.page.scss'],
})
export class EntryAdditionPage implements OnInit {

  type: string = "";

  constructor( private navCtrl: NavController, private activeRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( map => {
      this.type = map.get('type');
    } );
  }

  goBack() {
    this.navCtrl.back();
  }

}
