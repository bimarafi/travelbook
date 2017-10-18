import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, Loading, AlertController } from 'ionic-angular';

import { SearchResultPage } from "../search-result/search-result";
import { SearchModalPage } from "../modals/search-modal/search-modal";

import { IForm, IResponse, IAirportCode } from "../../interfaces/";

import { ApiService } from "../../providers/api-service/api-service";
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {
  loading: Loading;
  title: string;
  color: string;
  frmData: IForm.ISearchFlightFormData;
  constructor(
    private api: ApiService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {

    this.color = this.navParams.get('name');
    this.title = this.navParams.get('text');
    this.frmData = {
      from: { id: '', text: '' },
      to: { id: '', text: '' },
      goDate: Date.now(), retDate: undefined,
      adult: 1, child: 0, infant: 0,
      roundtrip: false, bussiness: false, sort: undefined
    }
  }
  ionViewDidLoad() {
    this.api.getToken().subscribe();
  }
  increase(val: number) {
    return (val += 1);
  }
  decrease(val: number) {
    return (val -= 1);
  }
  roundTripToggle() {
    if (this.frmData.roundtrip) {
      this.frmData.roundtrip = false;
      this.frmData.retDate = undefined;
    } else {
      this.frmData.roundtrip = true;
      this.frmData.retDate = Date.now();
    }
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
          this.frmData.from = ret.data;
          break;
        case "flightto":
          this.frmData.to = ret.data;
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
    let searchResult: IResponse.IFlightSearchResults;
    this.createLoading();
    this.loading.present();
    if (this.frmData.from.id == this.frmData.to.id) {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Kota keberangkatan dan kota tujuan harus berbeda',
        buttons: ['OK']
      });
      alert.present();
      this.frmData.to.id = '';
      this.frmData.to.text = '';
    } else if (this.frmData.to.id == '') {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Silahkan pilih bandara keberangkatan dan tujuan',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.frmData.adult == 0) {
      if (this.frmData.child > 0 || this.frmData.infant > 0) {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Peringatan',
          subTitle: 'Penumpang dewasa minimal 1 orang',
          buttons: ['OK']
        });
        alert.present();
      } else {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Peringatan',
          subTitle: 'Harap pilih jumlah penumpang',
          buttons: ['OK']
        });
        alert.present();
      }
    } else if (Date.parse(this.frmData.goDate.toString())/1000 < Date.parse(new Date().toDateString())/1000) {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Maaf, tanggal yang dipilih sudah lewat. Silahkan pilih tanggal lain',
        buttons: ['OK']
      });
      alert.present();
    } else if (this.frmData.retDate != undefined && Date.parse(this.frmData.retDate.toString())/1000 < Date.parse(this.frmData.goDate.toString())/1000) {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: 'Tanggal pulang minimal harus sama atau lebih besar dari tanggal pergi. Silahkan pilih tanggal lain',
        buttons: ['OK']
      });
      alert.present();
    } else {
      this.api.searchFlight(this.frmData).subscribe(
        res => {
          searchResult = res;
          this.loading.dismiss();
          this.navCtrl.push(SearchResultPage, { result: searchResult, color: this.color });
        },
        err => {
          console.log(err);
          this.loading.dismiss();
        }
      );
    }
  }
}
