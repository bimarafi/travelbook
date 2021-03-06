import { Component, ViewChild } from '@angular/core';
import { ViewController, NavParams, Searchbar } from 'ionic-angular';

import { IAirportCode } from "../../../interfaces/";
import { ApiService } from "../../../providers/api-service/api-service";

@Component({
  templateUrl: 'search-modal.html',
})
export class SearchModalPage {
  @ViewChild('input') input: Searchbar;
  title: string = "";
  type: string;
  items: IAirportCode[];
  constructor(public viewCtrl: ViewController, public navParams: NavParams, private api: ApiService) {
    this.type = this.navParams.get('type');
    this.init();
  }

  init() {
    switch (this.type) {
      case "flightfrom":
        this.title = "Keberangkatan"
      case "flightto":
        this.title = "Kedatangan"
        break;

      default:
        break;
    }
  }

  ionViewDidLoad() {

  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.input.setFocus();
    }, 150);
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  select(item: IAirportCode) {
    this.viewCtrl.dismiss({ data: item, type: this.type });
  }

  getItems(ev) {
    let val: string = ev.target.value;
    if (val.length === 0) {
      this.items = [];
      return;
    }
    this.api.getAirports(val).subscribe(
      data => { this.items = data; },
      err => {
        console.log(err);
      }
    );
  }
}
