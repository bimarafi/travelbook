import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { SearchResultPage } from "../search-result/search-result";
import { SearchModalPage } from "../modals/search-modal/search-modal";

import { IForm, IAirportCode } from "../../interfaces/";
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  title: string;
  color: string;
  data: IForm.ISearchFlightFormData;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {

    this.color = this.navParams.get('name');
    this.title = this.navParams.get('text');
    this.data = {
      from: { id: '', text: '' },
      to: { id: '', text: '' },
      goDate: Date.now(), retDate: Date.now(),
      adult: 1, child: 0, infant: 0,
      roundtrip: false, bussiness: false
    }
  }
  ionViewDidLoad() {
  }
  increase(val: number) {
    return (val += 1);
  }
  decrease(val: number) {
    return (val -= 1);
  }
  presentModal(val: string) {
    let modal = this.modalCtrl.create(SearchModalPage, { type: val });
    modal.onDidDismiss(ret => this.processModalData(ret));
    modal.present();
  }
  processModalData(ret: { data: IAirportCode, type: string }) {
    if (ret) {
      switch (ret.type) {
        case "flightfrom":
          this.data.from = ret.data;
          break;
        case "flightto":
          this.data.to = ret.data;
          break;

        default:
          break;
      }
    }
  }
  search() {
    this.navCtrl.push(SearchResultPage, { query: this.data, color: this.color });
  }
}
