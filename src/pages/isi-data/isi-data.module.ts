import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsiDataPage } from './isi-data';
import { ContactPageModule } from '../modals/contact/contact.module';
import { PassengerPageModule } from '../modals/passenger/passenger.module';

import { InlineSVGModule } from "ng-inline-svg";

@NgModule({
  declarations: [
    IsiDataPage,
  ],
  imports: [
    InlineSVGModule,
    ContactPageModule,
    PassengerPageModule,
    IonicPageModule.forChild(IsiDataPage),
  ],
})
export class IsiDataPageModule {}
