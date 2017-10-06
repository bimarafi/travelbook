import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, Loading } from 'ionic-angular';

import { SearchResultPage } from "../search-result/search-result";
import { SearchModalPage } from "../modals/search-modal/search-modal";

import { IForm, IAirportCode } from "../../interfaces/";

import { Http } from '@angular/http'; //sementara
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  loading: Loading;
  title: string;
  color: string;
  data: IForm.ISearchFlightFormData;
  constructor(
    private http: Http, //sementara
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
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
  createLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Mohon tunggu...'
    });
  }
  search() {
    let searchResult;
    this.createLoading();
    this.loading.present();
    //load example data
    this.http.get('/assets/example-data/search_flight.json').subscribe(
      res => {
        searchResult = res.json();
        //simulasi loading menunggu api
        setTimeout(()=>{
          this.loading.dismiss();
          this.navCtrl.push(SearchResultPage, { data: searchResult, color: this.color });
        }, 3000);
      },
      err => console.log(err)
    );
  }
}
