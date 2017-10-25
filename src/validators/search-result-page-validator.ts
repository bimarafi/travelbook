
import { AlertController } from 'ionic-angular';

import { IFlight } from '../interfaces/flight';

export class SearchResultPageValidator {
  go: IFlight;
  item: IFlight;

  constructor(public alertCtrl: AlertController) {

  }

  isValid() {
    if (this.go.arrival_flight_date === this.item.arrival_flight_date) {
      if (this.go.simple_arrival_time > this.item.simple_departure_time) {
        this.presentAlert('Waktu pulang harus lebih besar dari waktu pergi');
        return false;
      }
    }
    return true;
  }

  presentAlert(msg: string) {
    let alert = this.alertCtrl.create({
        title: 'Peringatan',
        subTitle: msg,
        buttons: ['OK']
    });
    alert.present();
  }
}
