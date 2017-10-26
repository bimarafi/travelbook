import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { IResponse, IDestination } from "../../interfaces";

import { ContactPage } from "../modals/contact/contact";
import { PassengerPage } from "../modals/passenger/passenger";

import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-isi-data',
  templateUrl: 'isi-data.html',
})
export class IsiDataPage {
  color: string;
  data: IResponse.IFlightDataResult
  goDet: IDestination;
  retDet: IDestination;
  required: any;
  requiredVal: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data = this.navParams.get('data');
    this.color = this.navParams.get('color');
    this.goDet = this.navParams.get('go_det');
    this.retDet = this.navParams.get('ret_det');
    this.mapRequired();
  }

  ionViewDidLoad() {
  }

  countAdultPriceTotal(): number {
    return (parseInt(this.data.departures.count_adult) * this.data.departures.price_adult);
  }

  countAdultToItem() {
    let num = parseInt(this.data.departures.count_adult);
    return this.createRange(num);
  }

  createRange(num: number) {
    let items: number[] = [];
    for (let i = 1; i <= num; i++) {
      items.push(i);
    }
    return items;
  }

  mapRequired() {
    this.required = _.omitBy(this.data.required, { category: 'separator' });
    _.forEach(this.required, item => {
      item['value'] = '';
    });
    this.requiredVal = _.values(this.required);
  }

  fillContactData() {
    this.presentModal(ContactPage, { required: this.requiredVal });
  }

  fillAdultPassengerData(num) {
    let category = 'adult' + num;
    this.presentModal(PassengerPage, { required: this.requiredVal, category: category });
  }

  presentModal(page, data) {
    let modal = this.modalCtrl.create(page, data);
    modal.onDidDismiss(data => {
      if (data !== undefined) {
        this.requiredVal = data
      }
    });
    modal.present();
  }
  displayAdultName(num) {
    let category = 'adult' + num;
    let item = _.filter(this.required, { category: category, type: 'textbox' })
    if (item === undefined) {
      return '';
    }
    return item[0].value + ' ' + item[1].value
  }

}
