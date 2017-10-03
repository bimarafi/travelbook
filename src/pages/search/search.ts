import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  title: string;
  color: string;
  roundtrip: boolean = false;
  bussiness: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.navParams.get('name');
    this.title = this.navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
