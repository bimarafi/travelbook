import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaraPemesananPage } from './cara-pemesanan';

@NgModule({
  declarations: [
    CaraPemesananPage,
  ],
  imports: [
    IonicPageModule.forChild(CaraPemesananPage),
  ],
})
export class CaraPemesananPageModule {}
