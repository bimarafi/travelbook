import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SearchResultPage } from "../search-result/search-result";

import { IForm } from "../../interfaces/";
import { ApiService } from "../../providers/api-service/api-service";
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  title: string;
  color: string;
  data: IForm.ISearchFlightFormData;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: ApiService) {

    this.color = this.navParams.get('name');
    this.title = this.navParams.get('text');
    this.data = {
      from: { id: '', text: '' },
      to: { id: '', text: '' },
      goDate: Date.now(),
      retDate: Date.now(),
      adult: 1,
      child: 0,
      infant: 0,
      roundtrip: false,
      bussiness: false
    }
  }

  ionViewDidLoad() {
    this.api.getAirports("jakarta").subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  increase(val: number) {
    val += 1;
    return val;
  }
  decrease(val: number) {
    val -= 1;
    return val;
  }

  search() {
    this.navCtrl.push(SearchResultPage, { query: this.data, color: this.color });
  }

}
