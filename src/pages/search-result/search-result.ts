import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IFlight, IResponse } from "../../interfaces";

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  color: string;
  title: string = 'Pemesanan';
  isReturn: boolean = false;
  searchResult: IResponse.IFlightSearchResults;
  data: { subtitle: string, list: IFlight[], date: string };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.color = this.navParams.get('color');
    this.searchResult = this.navParams.get('result');
    this.isReturn = this.navParams.get('is_return');
    console.log(this.searchResult.departures.result);
    if (this.isReturn) {
      this.data = {
        subtitle: "Kedatangan",
        list: this.searchResult.returns.result,
        date: this.searchResult.ret_det.formatted_date,
      }
    } else {
      this.data = {
        subtitle: "Keberangkatan",
        list: this.searchResult.departures.result.sort(function(a, b){
          return ((parseInt(a.price_value.toString()) === parseInt(b.price_value.toString())) ? 0 : ((parseInt(a.price_value.toString()) > parseInt(b.price_value.toString())) ? 1 : -1))
        }),
        date: this.searchResult.go_det.formatted_date,
      }
    }
  }
  ionViewDidLoad() {
  }
  next(item: IFlight) {
    if (this.searchResult.round_trip && !this.isReturn) {
      this.navCtrl.push(SearchResultPage, { result: this.searchResult, color: this.color, is_return: true, go: item });
    }
  }

}
