import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IFlight, IResponse } from "../../interfaces";

import { SearchResultPageValidator } from '../../validators/search-result-page-validator';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage extends SearchResultPageValidator {
  color: string;
  title: string = 'Pemesanan';
  isReturn: boolean = false;
  searchResult: IResponse.IFlightSearchResults;
  data: { subtitle: string, list: IFlight[], date: string };
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    super(alertCtrl);
    this.color = this.navParams.get('color');
    this.searchResult = this.navParams.get('result');
    this.isReturn = this.navParams.get('is_return');
    this.go = this.navParams.get('go');
    if (this.isReturn) {
      this.data = {
        subtitle: "Kedatangan",
        list: this.searchResult.returns.result,
        date: this.searchResult.ret_det.formatted_date,
      }
    } else {
      this.data = {
        subtitle: "Keberangkatan",
        list: this.searchResult.departures.result,
        date: this.searchResult.go_det.formatted_date,
      }
    }
  }
  ionViewDidLoad() {
  }
  next(item: IFlight) {
    if (this.go != undefined) {
      this.item = item;
      if (this.isValid()) {
        console.log('Lanjut Ke Halaman Pemesanan');
      }
    } else {
      console.log('Lanjut Ke Halaman Pemesanan');
    }
    if (this.searchResult.round_trip && !this.isReturn) {
      this.navCtrl.push(SearchResultPage, { result: this.searchResult, color: this.color, is_return: true, go: item });
    }
  }

}
