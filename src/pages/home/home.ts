import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { SearchPage } from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private app: App) {

  }
  search(){
    this.app.getRootNav().push(SearchPage);
  }
}
