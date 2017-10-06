import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  color:string;
  title:string = 'Pemesanan';
  subtitle:string = 'Keberangkatan';
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.navParams.get('color');
    this.data = this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

}
